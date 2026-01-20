import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ===== CONTACT HEADER ===== */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-5 py-1.5 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            Contact LiteCode
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Let’s Talk About Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Next Project
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Whether you’re building a startup, scaling a product, or modernizing
            your business — we’re here to help.
          </p>
        </motion.div>

        {/* ===== CONTACT INFO CARDS ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Mail size={28} />, title: "Email Us", value: "info@ilitecode.com" },
            { icon: <Phone size={28} />, title: "Call Us", value: "+91 81272 88127" },
            { icon: <MapPin size={28} />, title: "Location", value: "Narhe, Pune, Maharashtra, India" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-3 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <div className="absolute inset-[1px] bg-white rounded-2xl -z-10" />

              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* ===== CONTACT FORM ===== */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="col-span-2 md:col-span-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="col-span-2 md:col-span-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="col-span-2 px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              className="col-span-2 px-5 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none resize-none"
            />

            {status === "success" && (
              <p className="col-span-2 text-green-600 text-sm">✅ Message sent successfully.</p>
            )}

            {status === "error" && (
              <p className="col-span-2 text-red-600 text-sm">❌ Failed to send message. Try again.</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 mt-4 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
