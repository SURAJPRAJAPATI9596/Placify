import { useState } from "react";
import { Plus, Download } from "lucide-react";

const PlacementTracker = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Google",
      role: "SWE Intern",
      date: "2025-01-15",
      stage: "HR Round",
      action: "Prepare HR answers",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Dev",
      date: "2025-01-10",
      stage: "Offer Received",
      action: "Sign & accept",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Backend Intern",
      date: "2025-01-08",
      stage: "OA Cleared",
      action: "Prepare for DSA round",
    },
    {
      id: 4,
      company: "Flipkart",
      role: "Full Stack",
      date: "2024-12-28",
      stage: "Technical Round",
      action: "Practice system design",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newApp, setNewApp] = useState({
    company: "",
    role: "",
    date: "",
    stage: "Applications Sent",
    action: "",
  });

  const funnelData = [
    {
      label: "Applications Sent",
      count: applications.length,
      percent: "100%",
      color: "#6C3AFA",
    },
    { label: "OA Cleared", count: 22, percent: "45.8%", color: "#10B981" },
    { label: "Interviews", count: 11, percent: "23%", color: "#F59E0B" },
    { label: "Offers", count: 3, percent: "6%", color: "#EF4444" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newApp.company || !newApp.role || !newApp.date) return;

    const application = {
      id: Date.now(),
      ...newApp,
    };

    setApplications([application, ...applications]);
    setNewApp({
      company: "",
      role: "",
      date: "",
      stage: "Applications Sent",
      action: "",
    });
    setShowForm(false);
  };

  return (
    <div className="max-w-screen mx-auto px-6 pt-40 pb-24 bg-[var(--bg-primary)] min-h-screen">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-[var(--text-primary)]">
            Placement Tracker
          </h1>
          <p className="text-xl text-[var(--text-primary)] opacity-75 mt-2">
            Full application pipeline visibility — from applied to offer
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-3 bg-[var(--primary-violet)] hover:bg-[var(--secondary-violet)] text-white px-6 py-4 rounded-2xl font-medium transition-all active:scale-95"
        >
          <Plus size={24} />
          Add New Application
        </button>
      </div>

      {/* Add New Application Form */}
      {showForm && (
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
            Add New Application
          </h3>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company Name *"
              value={newApp.company}
              onChange={(e) =>
                setNewApp({ ...newApp, company: e.target.value })
              }
              className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:outline-none focus:border-[var(--primary-violet)]"
              required
            />

            <input
              type="text"
              placeholder="Role / Position *"
              value={newApp.role}
              onChange={(e) => setNewApp({ ...newApp, role: e.target.value })}
              className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:outline-none focus:border-[var(--primary-violet)]"
              required
            />

            <input
              type="date"
              value={newApp.date}
              onChange={(e) => setNewApp({ ...newApp, date: e.target.value })}
              className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:outline-none focus:border-[var(--primary-violet)]"
              required
            />

            <select
              value={newApp.stage}
              onChange={(e) => setNewApp({ ...newApp, stage: e.target.value })}
              className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:outline-none focus:border-[var(--primary-violet)]"
            >
              <option value="Applications Sent">Applications Sent</option>
              <option value="OA Cleared">OA Cleared</option>
              <option value="Technical Interview">Technical Interview</option>
              <option value="HR Interview">HR Interview</option>
              <option value="Offer Received">Offer Received</option>
              <option value="Rejected">Rejected</option>
            </select>

            <input
              type="text"
              placeholder="Next Action"
              value={newApp.action}
              onChange={(e) => setNewApp({ ...newApp, action: e.target.value })}
              className="md:col-span-2 p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:outline-none focus:border-[var(--primary-violet)]"
            />

            <div className="md:col-span-2 flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[var(--primary-violet)] text-white py-4 rounded-2xl font-medium hover:bg-[var(--secondary-violet)] transition"
              >
                Save Application
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 border border-[var(--border-color)] py-4 rounded-2xl font-medium hover:bg-[var(--card-bg)] transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Funnel Statistics */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-[var(--text-primary)]">
          Funnel Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {funnelData.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              <div
                className="text-6xl font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.count}
              </div>
              <div className="font-semibold text-lg text-[var(--text-primary)]">
                {item.label}
              </div>
              <div className="text-sm opacity-70 mt-1">{item.percent}</div>
              <div className="mt-6 h-2.5 bg-[var(--border-color)] rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{ width: item.percent, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application History */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Application History
          </h2>
          <button className="flex items-center gap-2 px-5 py-3 border border-[var(--border-color)] rounded-2xl hover:bg-[var(--card-bg)] transition">
            <Download size={18} /> Export
          </button>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
                <th className="text-left p-6 font-semibold">Company</th>
                <th className="text-left p-6 font-semibold">Role</th>
                <th className="text-left p-6 font-semibold">Applied On</th>
                <th className="text-left p-6 font-semibold">Stage</th>
                <th className="text-left p-6 font-semibold">Next Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-[var(--bg-primary)] transition"
                >
                  <td className="p-6 font-medium text-[var(--text-primary)]">
                    {app.company}
                  </td>
                  <td className="p-6 text-[var(--text-primary)]">{app.role}</td>
                  <td className="p-6 text-[var(--text-primary)] opacity-75">
                    {app.date}
                  </td>
                  <td className="p-6">
                    <span className="px-4 py-2 text-sm rounded-2xl border border-[var(--border-color)]">
                      {app.stage}
                    </span>
                  </td>
                  <td className="p-6 text-sm text-[var(--text-primary)]">
                    {app.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlacementTracker;
