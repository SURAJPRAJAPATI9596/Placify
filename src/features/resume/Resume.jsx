import React, { useState } from "react";
import FieldSection from "./components/FieldSection";
import TemplateSection from "./components/TemplateSection";
import FormSection from "./components/FormSection";
const Resume = () => {
  const [fields, setFields] = useState({
    Personal: false,
    Summary: false,
    Skills: false,
    Projects: false,
    Experience: false,
    Education: false,
    Certifications: false,
    Achievements: false,
    Languages: false,
  });

  const selectField = (name, e) => {
    setFields({
      ...fields,
      [name]: e.target.checked,
    });
  };
  return (
    <div
      className="
min-h-screen
p-6
bg-(--bg-primary)
text-(--text-primary)
"
    >
      {/* Heading */}

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Placify Resume Builder</h1>

        <p className="mt-3 opacity-70">Create ATS friendly resume</p>
      </div>

      {/* Sections */}
      <FieldSection fields={fields} selectField={selectField} />
      {/* Template */}
      <TemplateSection />
      {/* FORM + PREVIEW */}

      <div
        className="
grid
lg:grid-cols-2
gap-8
"
      >
        {/* FORM */}
        <FormSection fields={fields} />

        {/* PREVIEW */}

        <div>
          <div
            className="
sticky
top-5
rounded-xl
p-8
min-h-screen
bg-(--bg-primary)
text-(--text-primary)
border
"
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold">Preview</h1>

              <p>Frontend Developer</p>
            </div>

            <hr className="my-5" />

            <Preview title="SUMMARY" />

            <Preview title="SKILLS" />

            <Preview title="PROJECTS" />

            <Preview title="EXPERIENCE" />

            <button
              className="
mt-8
w-full
bg-blue-600
text-white
py-3
rounded-xl
"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Preview = ({ title }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold">{title}</h2>

    <div
      className="
h-3
bg-gray-300
rounded-full
mt-2
"
    />
  </div>
);

export default Resume;
