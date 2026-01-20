// src/pages/Contact.jsx
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Contact = () => {
  return (
    <main className="pt-24">
      <ContactForm />
      <ContactMap />
      <WhatsAppFloat />
    </main>
  );
};

export default Contact;
