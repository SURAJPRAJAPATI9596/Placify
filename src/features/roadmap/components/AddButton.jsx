import React from "react";
import { Plus } from "lucide-react";

const AddButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => setOpen(true)}
      className="
fixed
bottom-6
right-6
z-100
bg-blue-600
p-4
rounded-full
shadow-xl
flex
gap-2
items-center
"
    >
      <Plus />

      <span
        className="
hidden
sm:block
"
      >
        Add
      </span>
    </button>
  );
};

export default AddButton;
