import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, CheckCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* -------------------- CONSTANTS -------------------- */

const STORAGE_KEY = "litecode_chat";

const BOT_KNOWLEDGE = {
  greeting: "👋 Hi there! How can I help you today?",
  services:
    "We build web & mobile apps, AI platforms, SaaS products, cloud and enterprise software.",
  tech:
    "Our stack includes React, Next.js, Node.js, Tailwind CSS, AWS, AI/ML, Blockchain and DevOps.",
  pricing:
    "Pricing depends on scope and complexity. We offer fixed-price, hourly and dedicated team models.",
  timeline:
    "Small projects usually take 2–4 weeks, while enterprise systems take 2–4 months.",
  support:
    "Yes! We provide maintenance, upgrades, AMC and long-term technical support.",
  fallback:
    "Hmm 🤔 I want to make sure you get the right help. Would you like to talk directly with our expert team?",
};

const INTENTS = [
  { key: "greeting", keywords: ["hi", "hello", "hey", "good morning", "good evening"] },
  { key: "services", keywords: ["service", "build", "develop", "offer"] },
  { key: "tech", keywords: ["tech", "stack", "react", "technology"] },
  { key: "pricing", keywords: ["price", "cost", "budget", "charges"] },
  { key: "timeline", keywords: ["time", "duration", "delivery"] },
  { key: "support", keywords: ["support", "maintenance", "amc"] },
];

const SUGGESTIONS = {
  greeting: [
    "What services do you offer?",
    "How much does a project cost?",
    "Which technologies do you use?",
  ],
  services: ["Pricing details", "Project timeline", "Technologies used"],
  tech: ["Is React right for my project?", "Do you deploy on cloud?"],
  pricing: ["Get a free consultation", "Project timelines"],
  timeline: ["Can you deliver fast?", "How do you ensure deadlines?"],
  support: ["Do you offer AMC?", "How long is support provided?"],
  fallback: ["Talk to an expert", "Try another question"],
};

/* -------------------- COMPONENT -------------------- */

const ChatBot = () => {
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [lastIntent, setLastIntent] = useState("greeting");
  const [showWelcome, setShowWelcome] = useState(false);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : [{ from: "bot", text: "👋 Hi! I’m LiteCode Assistant. How can I help you?" }];
  });

  /* -------------------- EFFECTS -------------------- */

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Show welcome popup after load and auto-hide
  useEffect(() => {
    const showTimer = setTimeout(() => setShowWelcome(true), 3500);
    const hideTimer = setTimeout(() => setShowWelcome(false), 8500); // auto hide after 5 sec

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  /* -------------------- HELPERS -------------------- */

  const detectIntent = (text) => {
    const msg = text.toLowerCase();
    for (let intent of INTENTS) {
      if (intent.keywords.some((k) => msg.includes(k))) {
        return intent.key;
      }
    }
    return "fallback";
  };

  const botReply = (intent) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) =>
        prev
          .map((m, i) =>
            i === prev.length - 1 && m.from === "user" ? { ...m, seen: true } : m
          )
          .concat({ from: "bot", text: BOT_KNOWLEDGE[intent] })
      );
      setLastIntent(intent);
    }, 800 + Math.random() * 600);
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    botReply(detectIntent(text));
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* ----------------- WELCOME POPUP ----------------- */}
      <AnimatePresence>
        {showWelcome && !open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="absolute right-full bottom-0 mr-3 bg-indigo-600 text-white px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            How can I help you?
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------- CHAT BUTTON (POSITION LOCKED) ----------------- */}
      <motion.button
        whileHover={{ scale: open ? 1 : 1.1 }}
        onClick={() => setOpen(true)}
        className={`w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl flex items-center justify-center transition-opacity duration-300 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MessageCircle />
      </motion.button>

      {/* ----------------- CHAT WINDOW ----------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="absolute bottom-14 right-0 w-[360px] h-[600px] bg-white rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.25)] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div>
                <h4 className="font-semibold">LiteCode Assistant</h4>
                <p className="text-xs opacity-90">Online • Smart replies</p>
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] ${msg.from === "user" ? "ml-auto" : ""}`}>
                  <div
                    className={`px-4 py-2 rounded-xl text-sm ${
                      msg.from === "bot" ? "bg-gray-100" : "bg-indigo-600 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.from === "user" && (
                    <div className="flex justify-end mt-1 text-gray-400">
                      <CheckCheck size={14} className={msg.seen ? "text-indigo-600" : ""} />
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="text-sm text-gray-500">Typing…</div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 border-t space-y-1.5">
              {(SUGGESTIONS[lastIntent] || []).map((q, i) => (
                <button
                  key={i}
                  onClick={() =>
                    q === "Talk to an expert" ? navigate("/contact") : sendMessage(q)
                  }
                  className="w-full text-left text-sm px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-2.5 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message…"
                className="flex-1 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button onClick={() => sendMessage()} className="px-4 rounded-xl bg-indigo-600 text-white">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
