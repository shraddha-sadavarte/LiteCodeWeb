// src/components/VisionMission.jsx
import visionImg from "../assets/images/vission.jpg";

const VisionMission = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gray-50">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Section (LEFT) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl -rotate-3" />
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
              <img
                src={visionImg}
                alt="Vision and Mission"
                className="rounded-2xl object-cover w-full h-[420px]"
              />
            </div>
          </div>

          {/* Text Section (RIGHT) */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
              Vision & Mission
            </span>

            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a beacon of innovation, empowering businesses globally
                through transformative and future-ready software solutions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strive to revolutionize the digital landscape by delivering
                cutting-edge, customer-centric software solutions that drive
                growth, enhance efficiency, and enable long-term success.
              </p>
            </div>

            {/* Value highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Innovation Driven",
                "Global Impact",
                "Scalable Solutions",
                "Trusted Partnerships",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-lg bg-white shadow text-gray-700"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
