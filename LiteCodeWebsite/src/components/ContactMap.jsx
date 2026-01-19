// src/components/ContactMap.jsx
const ContactMap = () => {
  return (
    <section className="py-16">
      <iframe
        title="LiteCode Software Pvt Ltd - Manaji Nagar"
        src="https://www.google.com/maps?q=LiteCode+Software+Pvt+Ltd+Manaji+Nagar+Pune&output=embed"
        className="w-full h-[450px] border-0 rounded-2xl shadow-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default ContactMap;
