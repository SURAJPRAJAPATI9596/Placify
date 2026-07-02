import { useState } from "react";
import { Plus, Download, Edit2, Trash2 } from "lucide-react";

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
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
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

  // Open Add Form
  const openAddForm = () => {
    setFormData({
      company: "",
      role: "",
      date: "",
      stage: "Applications Sent",
      action: "",
    });
    setEditingId(null);
    setShowForm(true);
  };

  // Open Edit Form
  const openEditForm = (app) => {
    setFormData(app);
    setEditingId(app.id);
    setShowForm(true);
  };

  // Handle Add/Edit Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role || !formData.date) return;

    if (editingId) {
      setApplications(
        applications.map((app) =>
          app.id === editingId ? { ...app, ...formData } : app,
        ),
      );
    } else {
      const newApp = { id: Date.now(), ...formData };
      setApplications([newApp, ...applications]);
    }

    setShowForm(false);
    setEditingId(null);
  };

  // Delete Application
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      setApplications(applications.filter((app) => app.id !== id));
    }
    setDeleteId(null);
  };

  return (
    <div className="max-w-screen mx-auto px-6 py-40 bg-(--bg-primary) min-h-screen ">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-(--text-primary)">
            Placement Tracker
          </h1>
          <p className="text-xl text-(--text-primary) opacity-75 mt-2">
            Full application pipeline visibility — from applied to offer
          </p>
        </div>

        <button
          onClick={openAddForm}
          className="flex items-center gap-3 bg-(--primary-violet) hover:bg-(--secondary-violet) text-white px-6 py-4 rounded-2xl font-medium transition-all active:scale-95"
        >
          <Plus size={24} />
          Add New Application
        </button>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="bg-(--card-bg) border border-(--border-color) rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-(--text-primary)">
            {editingId ? "Edit Application" : "Add New Application"}
          </h3>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company Name *"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
              required
            />
            <input
              type="text"
              placeholder="Role / Position *"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
              required
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
              required
            />

            <select
              value={formData.stage}
              onChange={(e) =>
                setFormData({ ...formData, stage: e.target.value })
              }
              className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
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
              value={formData.action}
              onChange={(e) =>
                setFormData({ ...formData, action: e.target.value })
              }
              className="md:col-span-2 p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
            />

            <div className="md:col-span-2 flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-(--primary-violet) text-white py-4 rounded-2xl font-medium hover:bg-(--secondary-violet)] transition"
              >
                {editingId ? "Update Application" : "Save Application"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 border border-(--border-color) py-4 rounded-2xl font-medium hover:bg-(--card-bg) transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Funnel Statistics */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-(--text-primary)">
          Funnel Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {funnelData.map((item, i) => (
            <div
              key={i}
              className="bg-(--card-bg) border border-(--border-color) rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              <div
                className="text-6xl font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.count}
              </div>
              <div className="font-semibold text-lg text-(--text-primary)">
                {item.label}
              </div>
              <div className="text-sm opacity-70 mt-1">{item.percent}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Application History */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-(--text-primary)">
            Application History
          </h2>
          <button className="flex items-center gap-2 px-5 py-3 border border-(--border-color) rounded-2xl hover:bg-(--card-bg) transition">
            <Download size={18} /> Export
          </button>
        </div>

        <div className="bg-(--card-bg) border border- (--border-color) rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-(--bg-primary) border-b border-(--border-color)">
                <th className="text-left p-6 font-semibold">Company</th>
                <th className="text-left p-6 font-semibold">Role</th>
                <th className="text-left p-6 font-semibold">Applied On</th>
                <th className="text-left p-6 font-semibold">Stage</th>
                <th className="text-left p-6 font-semibold">Next Action</th>
                <th className="text-left p-6 font-semibold w-28">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--border-color)">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-(--bg-primary) transition">
                  <td className="p-6 font-medium text-(--text-primary)">
                    {app.company}
                  </td>
                  <td className="p-6 text-(--text-primary)">{app.role}</td>
                  <td className="p-6 text-(--text-primary) opacity-75">
                    {app.date}
                  </td>
                  <td className="p-6">
                    <span className="px-4 py-2 text-sm rounded-2xl border border-(--border-color)">
                      {app.stage}
                    </span>
                  </td>
                  <td className="p-6 text-sm text-(--text-primary)">
                    {app.action || "—"}
                  </td>
                  <td className="p-6 flex gap-3">
                    <button
                      onClick={() => openEditForm(app)}
                      className="text-(--primary-violet) hover:text-violet-700"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
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
