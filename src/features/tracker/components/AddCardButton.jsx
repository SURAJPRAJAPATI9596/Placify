import React from "react";

const AddCardButton = ({ setForm, setOpen, column }) => {
  return (
    <button
      onClick={() => {
        setForm({
          role: "",
          company: "",
          status: column,
          time: "",
        });

        setOpen(true);
      }}
      className="
border
border-dashed
w-full
py-2
rounded-xl
"
    >
      + Add Card
    </button>
  );
};

export default AddCardButton;
