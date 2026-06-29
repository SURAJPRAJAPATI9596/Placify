import React from "react";

const TemplateSection = ({ templateButton = [], setTemplateButton }) => {
  return (
    <div
      className="
p-5
rounded-xl
mb-8
border
bg-(--bg-primary)
text-(--text-primary)
"
    >
      <h2 className="text-2xl font-bold">Choose Template</h2>

      <div className="flex gap-5 mt-5 flex-wrap">
        {templateButton.map((item, index) => (
          <button
            onClick={() => {
              setTemplateButton((prev) =>
                prev.map((template, i) => ({
                  ...template,
                  selected: i === index,
                })),
              );
            }}
            key={index}
            className={`
              ${item.selected ? "bg-blue-600" : ""}
cursor-pointer
              px-6
py-3
border
rounded-xl
`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSection;
