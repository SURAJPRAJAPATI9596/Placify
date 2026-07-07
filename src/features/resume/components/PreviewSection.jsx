import { useReactToPrint } from "react-to-print";
import React, { useEffect, useRef } from "react";
import {
  DefaultTemplate,
  ModernTemplate,
  MinimalTemplate,
  ProfessionalTemplate,
  DeveloperTemplate,
  CreativeTemplate,
} from "./../allTemplates/index";

const PreviewSection = ({
  setPrint,
  resumeData = {},
  fields = {},
  templateButton = [],
}) => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: resumeData.personal?.name + "_Placify_Resume" || "Resume",
  });
  useEffect(() => {
    setPrint(() => handlePrint);
  }, [handlePrint]);

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
      {/* <div className="flex gap-x-28 mt-2 pl-10 pr-10">
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
      </div> */}
      <div>
        {selectedTemplate === "Professional" && (
          <ProfessionalTemplate
            resumeData={resumeData}
            fields={fields}
            resumeRef={resumeRef}
          />
        )}
        {selectedTemplate === "Default" && (
          <DefaultTemplate
            resumeData={resumeData}
            fields={fields}
            resumeRef={resumeRef}
          />
        )}
        {selectedTemplate === "Minimal" && (
          <MinimalTemplate
            resumeData={resumeData}
            fields={fields}
            resumeRef={resumeRef}
          />
        )}
        {selectedTemplate === "Modern" && (
          <ModernTemplate
            resumeData={resumeData}
            fields={fields}
            resumeRef={resumeRef}
          />
        )}
        {selectedTemplate === "Developer" && (
          <DeveloperTemplate
            resumeData={resumeData}
            fields={fields}
            resumeRef={resumeRef}
          />
        )}
        {selectedTemplate === "Creative" && (
          <CreativeTemplate
            resumeData={resumeData}
            fields={fields}
            resumeRef={resumeRef}
          />
        )}
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
