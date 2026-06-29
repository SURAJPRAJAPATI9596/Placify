import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import {
  DefaultTemplate,
  ModernTemplate,
  MinimalTemplate,
  ProfessionalTemplate,
  DeveloperTemplate,
  CreativeTemplate,
} from "./../allTemplates/index";

const PreviewSection = ({ data = {}, fields = {}, templateButton = [] }) => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: data.personal?.name + "_Placify_Resume" || "Resume",
  });
  const selectedTemplate = templateButton.find((item) => item.selected)?.name;

  return (
    <div
      className="
      sticky
      top-5
      rounded-xl
      p-1
      min-h-screen
      bg-(--bg-primary)
      text-(--text-primary)
      border
      "
    >
      {selectedTemplate === "Professional" && (
        <ProfessionalTemplate
          data={data}
          fields={fields}
          resumeRef={resumeRef}
        />
      )}
      {selectedTemplate === "Default" && (
        <DefaultTemplate data={data} fields={fields} resumeRef={resumeRef} />
      )}
      {selectedTemplate === "Minimal" && (
        <MinimalTemplate data={data} fields={fields} resumeRef={resumeRef} />
      )}
      {selectedTemplate === "Modern" && (
        <ModernTemplate data={data} fields={fields} resumeRef={resumeRef} />
      )}
      {selectedTemplate === "Developer" && (
        <DeveloperTemplate data={data} fields={fields} resumeRef={resumeRef} />
      )}
      {selectedTemplate === "Creative" && (
        <CreativeTemplate data={data} fields={fields} resumeRef={resumeRef} />
      )}
      <hr />
      <div className="flex gap-x-1 mt-2">
        <button
          onClick={handlePrint}
          className="
      w-full
      bg-blue-600
      text-white
      py-3
      rounded-xl
      "
        >
          Download PDF
        </button>

        <button
          onClick={handlePrint}
          className="
          
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          "
        >
          AI-reWrite
        </button>
        <button
          onClick={handlePrint}
          className="
        w-full
        bg-blue-600
        text-white
        py-3
        rounded-xl
        "
        >
          Original
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2
      className="
text-xl
font-bold
border-b
pb-2
mb-4
"
    >
      {title}
    </h2>

    {children}
  </div>
);

export default PreviewSection;
