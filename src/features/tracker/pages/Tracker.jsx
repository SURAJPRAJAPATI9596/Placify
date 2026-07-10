import { useState, useRef, useEffect } from "react";
import FunnelCard from "../components/FunnelCard";
import { Plus, Download, Edit2, Trash2 } from "lucide-react";
import InputModel from "../components/InputModel";
import FilterBar from "./../components/FilterBar";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

const countStage = (data, stageName) => {
  let count = 0;
  data.map((value) => {
    if (value.stage.toUpperCase() === stageName.toUpperCase()) {
      count += 1;
    }
  });
  return count;
};

const PlacementTracker = () => {
  const printRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [filterData, setFilterData] = useState({
    search: "",
    filter: "",
  });

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Placify_Placement_report",
  });
  const handleChange = (data = { search: "", filter: "All" }) => {
    setFilterData(data);
  };

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    date: "",
    stage: "Applications Sent",
    action: "",
  });

  const [applications, setApplications] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("/api/v1/trackers");

    setApplications(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = applications?.filter((app) => {
    const search = filterData.search.trim().toLowerCase();
    const filter = filterData.filter.trim().toLowerCase();

    const matchesSearch =
      search === "" ||
      app.company.toLowerCase().includes(search) ||
      app.role.toLowerCase().includes(search);

    const matchesStage =
      filter === "" || filter === "all" || app.stage.toLowerCase() === filter;

    return matchesSearch && matchesStage;
  });
  const funnelData = [
    {
      label: "Applications Sent",
      count: applications.length,
      percent: "100%",
      color: "#6C3AFA",
    },
    {
      label: "OA Cleared",
      count: countStage(applications, "oa cleared"),
      percent: "45.8%",
      color: "#10B981",
    },
    {
      label: "Technical Interview",
      count: countStage(applications, "Technical Interview"),
      percent: "23%",
      color: "#F59E0B",
    },
    {
      label: "HR Interview",
      count: countStage(applications, "HR Interview"),
      percent: "6%",
      color: "#EF4444",
    },
    {
      label: "Offer Received",
      count: countStage(applications, "Offer Received"),
      percent: "6%",
      color: "#EF4444",
    },
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
  const openEditForm = (app, _id) => {
    setFormData(app);
    setEditingId(app._id);
    setShowForm(true);
  };

  // Handle Add/Edit Submit

  // Delete Application
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      setApplications(applications.filter((app) => app._id !== id));
    }
    setDeleteId(null);
    const response = await axios.delete(`/api/v1/trackers/${id}`);
    await fetchData();
    console.log(response);
  };

  return (
    <div className="max-w-screen mx-auto px-6 py-40 bg-(--bg-primary) min-h-screen ">
      <div className=" flex-col lg:flex-row mt- items-end mb-10 w-full">
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
          className=" relative flex items-center gap-3 bg-(--primary-violet) hover:bg-(--secondary-violet) text-white px-6 py-4 rounded-2xl font-medium transition-all active:scale-95 mr-40 mt-10"
        >
          <Plus size={24} />
          New
        </button>
      </div>

      {/* Funnel Statistics */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-(--text-primary)">
          Funnel Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 ">
          {funnelData?.map((item, i) => (
            <FunnelCard item={item} key={i} />
          ))}
        </div>
      </div>

      {/* Add / Edit Form */}
      {showForm ? (
        <InputModel
          fetchData={fetchData}
          applications={applications}
          setApplications={setApplications}
          setEditingId={setEditingId}
          setShowForm={setShowForm}
          editingId={editingId}
          setFormData={setFormData}
          setShowForm={setShowForm}
          formData={formData}
        />
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-(--text-primary)">
              Application History
            </h2>
            <button
              className="flex items-center gap-2 px-5 py-3 border border-(--border-color) rounded-2xl hover:bg-(--card-bg) transition"
              onClick={handlePrint}
            >
              <Download size={18} /> Export
            </button>
          </div>
          <FilterBar handleChange={handleChange} />
          <div className="bg-(--card-bg) border border- (--border-color) rounded-3xl overflow-hidden">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              ref={printRef}
            >
              {filteredData?.map((app) => (
                <div
                  key={app.id}
                  className="bg-(--card-bg) border border-(--border-color) rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-(--text-primary)">
                        {app.company}
                      </h3>

                      <p className="text-sm text-(--text-primary) opacity-70">
                        {app.role}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-sm bg-(--primary-bg)">
                      {app.stage}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm text-(--text-primary)">
                    <p>
                      <strong>Applied:</strong> {app.date}
                    </p>

                    <p>
                      <strong>Next Action:</strong> {app.action || "No Action"}
                    </p>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => openEditForm(app, app._id)}
                      className="flex items-center gap-2 no-print MuiButtonBase-root"
                    >
                      <Edit2 size={18} />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(app._id)}
                      className="flex items-center gap-2 text-red-500 no-print MuiButtonBase-root"
                    >
                      <Trash2 size={18} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      )}
      {/* Application History */}
    </div>
  );
};

export default PlacementTracker;
