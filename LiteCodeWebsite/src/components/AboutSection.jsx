// src/components/AboutSection.jsx
import aboutImg from "../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
              About Us
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Building Digital Excellence at{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LiteCode
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver cost-effective, unified digital solutions that accelerate
              transformation, improve efficiency, and unlock sustainable business growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With over <strong className="text-gray-900">12+ years of expertise</strong>,
              our team enables businesses to stay focused on what matters most—while we
              take care of technology, innovation, and scale.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Enterprise Solutions",
                "Startup Friendly",
                "Secure & Scalable",
                "Customer-Centric",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-3" />
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
              <img
                src={aboutImg}
                alt="About LiteCode"
                className="rounded-2xl object-cover w-full h-[420px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
