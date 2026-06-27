import React from "react";

const TemplateSection = () => {
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
        {["Modern", "Minimal", "Professional", "Developer"].map((item) => (
          <button
            key={item}
            className="
px-6
py-3
border
rounded-xl
hover:bg-blue-600
hover:text-white
"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSection;
