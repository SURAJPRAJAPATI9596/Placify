import React from "react";

const FieldSection = ({ fields, selectField }) => {
  return (
    <div
      className="
rounded-2xl
p-5
mb-8
bg-(--bg-primary)
text-(--text-primary)
border
"
    >
      <h2 className="text-2xl font-bold mb-5">Select Resume Sections</h2>

      <div
        className="
grid
grid-cols-1
md:grid-cols-6
gap-4
"
      >
        {Object.keys(fields).map((item) => (
          <label
            key={item}
            className="
flex
items-center
gap-3
p-4
border
rounded-xl
cursor-pointer
hover:border-blue-500
"
          >
            <input
              type="checkbox"
              className="w-5 h-5"
              onChange={(e) => selectField(item, e)}
            />

            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FieldSection;
