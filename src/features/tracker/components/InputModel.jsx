import React from "react";
import { X } from "lucide-react";
import animation from "./../../../styles/CardAnimation";

const InputModel = ({
  editId,
  setOpen,
  changeHandler,
  form,
  columns,
  saveApplication,
}) => {
  return (
    <div
      data-aos={animation.card}
      className="
fixed
inset-0
z-9999
bg-black/70
flex
items-center
justify-center
p-5
"
    >
      <div
        className="
bg-(--bg-primary)
text-(--text-primary)
w-full
max-w-md
rounded-2xl
p-6
"
      >
        <div
          className="
flex
justify-between
items-center
"
        >
          <h2 className="text-xl font-bold">
            {editId ? "Edit" : "Add"}
            Application
          </h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="space-y-4 mt-5">
          <Input
            name="role"
            value={form.role}
            placeholder="Role"
            onChange={changeHandler}
          />

          <Input
            name="company"
            value={form.company}
            placeholder="Company"
            onChange={changeHandler}
          />

          <select
            name="status"
            value={form.status}
            onChange={changeHandler}
            className="Input"
          >
            {columns.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>

          <Input
            name="time"
            value={form.time}
            placeholder="Time"
            onChange={changeHandler}
          />

          <button
            onClick={saveApplication}
            className="
bg-blue-600
w-full
py-3
rounded-xl
"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ ...props }) => (
  <input
    {...props}
    className="
w-full
p-3
rounded-xl
bg-transparent
border
"
  />
);

export default InputModel;
