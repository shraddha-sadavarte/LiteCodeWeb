import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/images/rightcontact.webp";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative gradient blobs (same style as About) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 space-y-6">

            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
              Contact LiteCode
            </span>

            <h1 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
              Let’s Build Something{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Exceptional
              </span>
            </h1>

            <p className="text-gray-600 max-w-lg">
              Share your idea, challenge, or project — our team will help you turn
              it into a scalable digital solution.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 81272 88127"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>

              {status === "success" && (
                <p className="md:col-span-2 text-green-600 text-sm">
                  ✅ Message sent successfully. We’ll get back to you shortly.
                </p>
              )}

              {status === "error" && (
                <p className="md:col-span-2 text-red-600 text-sm">
                  ❌ Failed to send message. Please try again.
                </p>
              )}

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-[1.02] transition-transform disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message 🚀"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: IMAGE (Styled like About image card) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-3" />
            <div className="relative p-6">
              <img
                src={contactImg}
                alt="Contact LiteCode"
                className="w-full h-[520px] md:h-[650px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
