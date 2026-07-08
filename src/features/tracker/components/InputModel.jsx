import React from "react";
import axios from "axios";

const options = [
  "Applications Sent",
  "OA Cleared",
  "Technical Interview",
  "HR Interview",
  "Offer Received",
  "Rejected",
];

const InputModel = ({
  applications,
  editingId,
  setEditingId,
  setFormData,
  setShowForm,
  formData,
  setApplications,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role || !formData.date) return;

    if (editingId) {
      setApplications(
        applications.map((app) =>
          app.id === editingId ? { ...app, ...formData } : app,
        ),
      );

      const response = await axios.put(
        `/api/v1/trackers/${editingId}`,
        formData,
      );
      console.log(response);
    }
    // else {
    //   const newApp = { id: Date.now(), ...formData };
    //   setApplications([newApp, ...applications]);
    // }

    setShowForm(false);
    setEditingId(null);
    //axios call
    const response = await axios.post("/api/v1/trackers", formData);
    console.log(response);
  };
  return (
    <div className="bg-(--card-bg) border border-(--border-color) rounded-3xl p-8 mb-12 ">
      <h3 className="text-2xl font-semibold mb-6 text-(--text-primary)">
        {editingId ? "Edit Application" : "Add New Application"}
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6 text-(--text-primary)"
      >
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
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
          required
        />

        <select
          value={formData.stage}
          onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
          className="p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
        >
          {options.map((value) => (
            <option>{value}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Next Action"
          value={formData.action}
          onChange={(e) => setFormData({ ...formData, action: e.target.value })}
          className="md:col-span-2 p-4 rounded-2xl border border-(--border-color) bg-(--bg-primary)"
        />

        <div className="md:col-span-2 flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-(--primary-violet) text-white py-4 rounded-2xl font-medium hover:bg-(--secondary-violet)] transition"
          >
            {editingId ? "Update" : "Save"}
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
  );
};

export default InputModel;
