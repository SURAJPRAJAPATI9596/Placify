import React, { useEffect, useState } from "react";
import { Search, Trash2, Edit, Calendar, X } from "lucide-react";
import Status from "../components/Status";
import SearchBar from "../components/Search";
import InputModel from "../components/InputModel";
import AddCardButton from "../components/AddCardButton";
import AddButton from "../../roadmap/components/AddButton";

const Tracker = () => {
  const [applications, setApplications] = useState([]);

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    role: "",
    company: "",
    status: "Applied",
    time: "",
  });

  const columns = ["Applied", "Online Test", "Interview", "Offer"];

  const changeHandler = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const saveApplication = () => {
    if (!form.role || !form.company) return;

    if (editId) {
      setApplications((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                ...form,
              }
            : item,
        ),
      );
    } else {
      setApplications((prev) => [
        ...prev,

        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      role: "",
      company: "",
      status: "Applied",
      time: "",
    });

    setEditId(null);

    setOpen(false);
  };

  const editApplication = (item) => {
    setForm({
      role: item.role,
      company: item.company,
      status: item.status,
      time: item.time,
    });

    setEditId(item.id);

    setOpen(true);
  };

  const deleteApplication = (id) => {
    setApplications((prev) => prev.filter((x) => x.id !== id));
  };

  const count = (status) => {
    return applications.filter((x) => x.status === status).length;
  };

  const filtered = applications.filter(
    (item) =>
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div
        className="
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
p-5
pt-40
"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div
            className="
flex
flex-col
md:flex-row
justify-between
gap-5
"
          >
            <div>
              <p className="text-purple-400 font-bold">PLACEMENT</p>

              <h1
                className="
text-4xl
font-bold
"
              >
                Tracker
              </h1>
            </div>
          </div>

          {/* STATS */}
          <Status columns={columns} count={count} />

          {/* SEARCH */}
          <SearchBar setSearch={setSearch} />

          {/* ADD BUTTON */}
          <AddButton setOpen={setOpen} />
          {/* BOARD */}

          <div
            className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-5
mt-8
"
          >
            {columns.map((column) => (
              <div
                key={column}
                className="
bg-white/5
rounded-2xl
p-4
min-h-400px
"
              >
                <h2
                  className="
font-bold
text-xl
mb-5
"
                >
                  {column}
                </h2>

                {filtered
                  .filter((x) => x.status === column)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="
bg-black/20
rounded-xl
p-4
mb-3
"
                    >
                      <div
                        className="
flex
justify-between
"
                      >
                        <h3 className="font-bold">{item.role}</h3>

                        <div className="flex gap-2">
                          <button onClick={() => editApplication(item)}>
                            <Edit size={15} />
                          </button>

                          <button onClick={() => deleteApplication(item.id)}>
                            <Trash2 size={15} className="text-red-400" />
                          </button>
                        </div>
                      </div>

                      <p>{item.company}</p>

                      <p
                        className="
text-purple-400
mt-3
text-sm
flex
gap-2
"
                      >
                        <Calendar size={14} />

                        {item.time}
                      </p>
                    </div>
                  ))}
                <AddCardButton
                  setForm={setForm}
                  setOpen={setOpen}
                  column={column}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL OUTSIDE */}

      {open && (
        <InputModel
          editId={editId}
          changeHandler={changeHandler}
          columns={columns}
          form={form}
          setOpen={setOpen}
          saveApplication={saveApplication}
        />
      )}
    </>
  );
};

export default Tracker;
