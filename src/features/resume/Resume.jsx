import React, { useState } from "react";
import FieldSection from "./components/FieldSection";
import TemplateSection from "./components/TemplateSection";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

const Resume = () => {
  const [data, setData] = useState();
  const sendData = (resumeData) => {
    return setData(resumeData);
  };

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
        <FormSection fields={fields} sendData={sendData} />

        {/* PREVIEW */}
        <PreviewSection data={data} />
      </div>
    </div>
  );
};

export default Resume;
