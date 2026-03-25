import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const JOB_TYPES = [
  "All",
  "Full-Time",
  "Part-Time",
  "Internship",
  "Contract",
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const navigate = useNavigate();

  /* ---------------- LOAD JOBS ---------------- */
  useEffect(() => {
    fetch("http://localhost/careers-api/get-job.php")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Error loading jobs:", err));
  }, []);

  /* ---------------- FILTER JOBS ---------------- */
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title?.toLowerCase().includes(search.toLowerCase()) ||
        job.location?.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" ||
        job.type?.toLowerCase() === typeFilter.toLowerCase();

      return matchesSearch && matchesType;
    });
  }, [jobs, search, typeFilter]);

  // Get unique locations for keywords
  const uniqueLocations = [...new Set(jobs.map(job => job.location).filter(Boolean))];
  const jobTitles = jobs.slice(0, 5).map(job => job.title).join(", ");

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Careers at Litecode Software | {jobs.length} Open Positions - Join Our Team</title>
        <meta name="title" content="Careers at Litecode Software | {jobs.length} Open Positions - Join Our Team" />
        <meta name="description" content={`Litecode Software is hiring! Explore ${jobs.length} exciting career opportunities including ${jobTitles || "software development, web development, and AI roles"}. Join a fast-growing tech team in ${uniqueLocations.join(", ") || "India"}. Apply now for full-time, part-time, and internship positions.`} />
        <meta name="keywords" content={`careers at Litecode Software, software company jobs, ${jobTitles}, tech jobs India, software developer jobs, IT careers, ${uniqueLocations.join(", ")} jobs, internship opportunities, software development careers`} />
        <meta name="author" content="Litecode Software Pvt. Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.litecodesoftware.com/careers" />
        <meta property="og:title" content={`Careers at Litecode Software | ${jobs.length} Open Positions`} />
        <meta property="og:description" content={`Join Litecode Software! We're hiring for ${jobs.length} positions including ${jobTitles}. Build your career with a dynamic tech team.`} />
        <meta property="og:image" content="https://www.litecodesoftware.com/images/careers-og-image.jpg" />
        <meta property="og:image:alt" content="Careers at Litecode Software - Join Our Team" />
        <meta property="og:site_name" content="Litecode Software" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.litecodesoftware.com/careers" />
        <meta name="twitter:title" content={`Careers at Litecode Software | ${jobs.length} Open Positions`} />
        <meta name="twitter:description" content={`Join our team! Explore ${jobs.length} exciting career opportunities in software development, web, AI, and more.`} />
        <meta name="twitter:image" content="https://www.litecodesoftware.com/images/careers-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.litecodesoftware.com/careers" />
        
        {/* Structured Data for Job Postings */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Careers at Litecode Software",
            "description": `Current job openings at Litecode Software - ${jobs.length} positions available`,
            "url": "https://www.litecodesoftware.com/careers",
            "numberOfItems": jobs.length,
            "itemListElement": jobs.slice(0, 10).map((job, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "JobPosting",
                "title": job.title,
                "description": job.description,
                "datePosted": job.date_posted || new Date().toISOString().split('T')[0],
                "employmentType": job.type,
                "jobLocation": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": job.location || "India",
                    "addressCountry": "IN"
                  }
                },
                "hiringOrganization": {
                  "@type": "Organization",
                  "name": "Litecode Software Pvt. Ltd.",
                  "sameAs": "https://www.litecodesoftware.com",
                  "logo": "https://www.litecodesoftware.com/logo.png"
                },
                "applicantLocationRequirements": {
                  "@type": "Country",
                  "name": "IN"
                },
                "workHours": job.type === "Full-Time" ? "40 hours per week" : "Flexible",
                "experienceRequirements": job.experience || "Freshers welcome",
                "skills": job.skills || ["Software Development", "Team Collaboration"]
              }
            }))
          })}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Litecode Software Pvt. Ltd.",
            "url": "https://www.litecodesoftware.com",
            "logo": "https://www.litecodesoftware.com/logo.png",
            "description": "Leading software development company offering career opportunities in web development, mobile apps, AI, and cloud solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "HR Department",
              "email": "careers@litecodesoftware.com"
            },
            "hiring": jobs.map(job => ({
              "@type": "JobPosting",
              "title": job.title
            }))
          })}
        </script>
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.litecodesoftware.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Careers",
                "item": "https://www.litecodesoftware.com/careers"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema for Career Questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of jobs are available at Litecode Software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `We offer ${JOB_TYPES.filter(t => t !== "All").join(", ")} positions in software development, web development, mobile app development, AI, and cloud technologies.`
                }
              },
              {
                "@type": "Question",
                "name": "How can I apply for a job at Litecode Software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Browse our open positions and click 'Apply Now' on any job posting. Fill out the application form with your details and resume, and our HR team will contact you."
                }
              },
              {
                "@type": "Question",
                "name": "What locations do you hire for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `We currently have openings in ${uniqueLocations.join(", ") || "various locations across India"}. We also offer remote opportunities for certain positions.`
                }
              },
              {
                "@type": "Question",
                "name": "Does Litecode Software offer internships?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer internship opportunities for students and recent graduates. Check our open positions for current internship listings."
                }
              }
            ]
          })}
        </script>
        
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>

      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-gray-50 to-indigo-50 overflow-hidden">
        {/* BACKGROUND BLOBS */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700">
              Careers at LiteCode
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              Join Our Team
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities and build your career with a fast-growing tech team.
              Currently offering <span className="font-semibold text-indigo-600">{jobs.length} open positions</span>.
            </p>
          </motion.div>

          {/* SEARCH + FILTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-6 mb-14 flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Search by job title or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Search jobs"
            />

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Filter by job type"
            >
              {JOB_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </motion.div>

          {/* JOB LIST */}
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow text-center">
              <p className="text-gray-600 text-lg">
                {search || typeFilter !== "All" 
                  ? "No job openings match your search. Try adjusting your filters."
                  : "No job openings available at the moment. Check back soon!"}
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 mb-6 text-right">
                Showing {filteredJobs.length} of {jobs.length} positions
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {filteredJobs.map((job, i) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    {/* JOB TYPE BADGE */}
                    <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700">
                      {job.type}
                    </span>

                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                      {job.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      📍 {job.location || "India"} • 💼 {job.type}
                    </p>

                    {job.experience && (
                      <p className="text-sm text-gray-500 mt-1">
                        📅 Experience: {job.experience}
                      </p>
                    )}

                    <p className="mt-4 text-gray-600 leading-relaxed line-clamp-4">
                      {job.description}
                    </p>

                    <button
                      onClick={() =>
                        navigate(
                          "/contact?job=" + encodeURIComponent(job.title)
                        )
                      }
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 group-hover:gap-3 transition-all"
                    >
                      Apply Now
                      <span className="text-lg transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Careers;