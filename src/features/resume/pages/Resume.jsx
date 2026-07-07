import React, { useEffect, useState } from "react";
import FieldSection from "../components/FieldSection";
import TemplateSection from "../components/TemplateSection";
import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
import FlashMessage from "./../../../components/common/FlashMessage";
import axios from "axios";

const Resume = () => {
  const [print, setPrint] = useState(null);
  const [aiResume, setAiResume] = useState();
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      github: "",
      linkedin: "",
      Github: "",
    },

    summary: "",

    skills: [],

    projects: [
      {
        name: "",
        tech: "",
        description: "",
      },
    ],

    experience: [
      {
        company: "",
        role: "",
        description: "",
      },
    ],

    education: [
      {
        degree: "",
        college: "",
        year: "",
        cgpa: "",
      },
    ],

    certifications: [
      {
        name: "",
        organization: "",
        date: "",
        credentialId: "",
        url: "",
      },
    ],

    achievements: [
      {
        title: "",
        description: "",
        date: "",
      },
    ],

    languages: [
      {
        name: "",
        level: "",
      },
    ],
  });

  const [templateButton, setTemplateButton] = useState([
    {
      name: "Default",
      selected: true,
    },
    {
      name: "Modern",
      selected: false,
    },

    {
      name: "Minimal",
      selected: false,
    },

    {
      name: "Professional",
      selected: false,
    },

    {
      name: "Developer",
      selected: false,
    },
  ]);

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
  const handleRewrite = async () => {
    try {
      const response = await axios.post("/api/v1/ai/resume", resumeData);
      let data = response.data.resume.content;
      data = JSON.parse(data);
      setResumeData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   setResumeData(aiResume);
  // }, [aiResume]);

  return (
    <div
      className=" pt-40
min-h-screen
p-6
bg-(--bg-primary)
text-(--text-primary)
"
    >
      {/* Heading */}

      <div className="text-center mb-10">
        <FlashMessage
          show={true}
          type="warning"
          title="Placify Error"
          message="Hey... Placify user before using this feature make sure you are on desktop device because temprarily our developers removed this feature for phone device they are working for it "
          duration={100000}
          onClose={() => {}}
          position="top-center"
        />
        <h1 className="text-4xl font-bold">Placify Resume Builder</h1>

        <p className="mt-3 opacity-70">Create ATS friendly resume</p>
      </div>

      {/* Sections */}
      <FieldSection fields={fields} selectField={selectField} />
      {/* Template */}
      <TemplateSection
        templateButton={templateButton}
        setTemplateButton={setTemplateButton}
      />
      <div className="flex  gap-x-2 mt-2 pl-0 pr-10 pb-4">
        <button
          onClick={() => {
            handleRewrite();
          }}
          className="
      bg-blue-600
      text-white
      py-3
      rounded-xl
      "
        >
          AI-re-Write
        </button>
        <button
          const
          onClick={() => {
            print?.();
          }}
          className="
      
      bg-blue-600
      text-white
      py-3
      rounded-xl
      "
        >
          Download PDF
        </button>
      </div>
      {/* FORM + PREVIEW */}

      <div
        className="
    
         grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4
"
      >
        {/* FORM */}
        <FormSection
          fields={fields}
          resumeData={resumeData}
          setResumeData={setResumeData}
        />

        {/* PREVIEW */}
        <PreviewSection
          setPrint={setPrint}
          resumeData={resumeData}
          fields={fields}
          templateButton={templateButton}
        />
      </div>
    </div>
  );
};

export default Resume;
