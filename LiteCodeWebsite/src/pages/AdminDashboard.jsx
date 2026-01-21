import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Trash2, Pencil } from "lucide-react";

const STORAGE_KEY = "admin_jobs";

const JOB_TYPES = ["Full-time", "Part-time", "Internship", "Contract"];

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    location: "",
    type: "Full-time",
    experience: "",
    description: "",
  });
  const [deleteId, setDeleteId] = useState(null);

  const navigate = useNavigate();

  /* ---------------- LOAD JOBS ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setJobs(stored ? JSON.parse(stored) : []);
  }, []);

  /* ---------------- SAVE JOBS ---------------- */
  const saveJobs = (data) => {
    setJobs(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* ---------------- ADD / UPDATE ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      saveJobs(jobs.map((j) => (j.id === form.id ? form : j)));
    } else {
      saveJobs([...jobs, { ...form, id: Date.now() }]);
    }

    resetForm();
  };

  const resetForm = () =>
    setForm({
      id: null,
      title: "",
      location: "",
      type: "Full-time",
      experience: "",
      description: "",
    });

  /* ---------------- DELETE ---------------- */
  const confirmDelete = () => {
    saveJobs(jobs.filter((j) => j.id !== deleteId));
    setDeleteId(null);
  };

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    localStorage.removeItem("admin_logged_in");
    navigate("/admin-login", { replace: true });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Admin Dashboard – Careers
          </h1>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 mb-14 space-y-5"
        >
          <h2 className="text-xl font-bold text-gray-800">
            {form.id ? "Edit Job Posting" : "Add New Job"}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              placeholder="Job Title"
              className="input"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />

            <input
              placeholder="Location"
              className="input"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />

            <select
              className="input"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              {JOB_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <input
              placeholder="Experience (optional)"
              className="input"
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
            />
          </div>

          <textarea
            placeholder="Job Description"
            rows={4}
            className="input"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          />

          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
              {form.id ? "Update Job" : "Add Job"}
            </button>

            {form.id && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* JOB LIST */}
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.location} • {job.type}
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setForm(job)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
                >
                  <Pencil size={16} /> Edit
                </button>

                <button
                  onClick={() => setDeleteId(job.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Delete Job?
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this job posting? This action
              cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-5 py-2 rounded-lg border"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INPUT STYLES */}
      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #d1d5db;
          outline: none;
        }
        .input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </section>
  );
};

export default AdminDashboard;
