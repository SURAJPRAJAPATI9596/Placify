import { useReactToPrint } from "react-to-print";
import React from "react";
import { useRef } from "react";
const placeHOlderData = {
  personal: {
    name: "Your Name",
    email: "your@email.com",
    phone: "Your Phone Number",
    location: "Your Location",
    github: "Your Github URL",
    linkedin: "Your LinkedIn URL",
  },

  summary: "Write your professional summary here...",

  skills: ["Skill 1", "Skill 2", "Skill 3"],

  projects: [
    {
      name: "Project Name",
      tech: "Technologies Used",
      description: "Project description goes here...",
    },
  ],

  experience: [
    {
      company: "Company Name",
      role: "Your Role",
      description: "Your work experience description...",
    },
  ],

  education: [
    {
      degree: "Degree Name",
      college: "College Name",
      year: "Passing Year",
      cgpa: "CGPA / Percentage",
    },
  ],

  certifications: [
    {
      name: "Certification Name",
      organization: "Organization Name",
      date: "Certification Date",
      credentialId: "Credential ID",
      url: "Certification URL",
    },
  ],

  achievements: [
    {
      title: "Achievement Title",
      description: "Achievement description...",
      date: "Achievement Date",
    },
  ],

  languages: [
    {
      name: "Language Name",
      level: "Language Level",
    },
  ],
};

const PreviewSection = ({ data = placeHOlderData }) => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Placify_Resume",
  });
  return (
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
      <div ref={resumeRef}>
        {/* PERSONAL */}

        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {data.personal?.name || "Your Name"}
          </h1>

          <h3 className="text-xl mt-2">
            {data.personal?.role || "Frontend Developer"}
          </h3>

          <p className="mt-3">
            {data.personal?.email}

            {" | "}

            {data.personal?.phone}

            {" | "}

            {data.personal?.location}
          </p>

          <div className="mt-3 flex justify-center gap-4">
            {data.personal?.github && <span>Github</span>}

            {data.personal?.linkedin && <span>LinkedIn</span>}
          </div>
        </div>

        <hr className="my-6" />

        {/* SUMMARY */}

        <Section title="SUMMARY">
          <p>{data.summary || "Your professional summary"}</p>
        </Section>

        {/* SKILLS */}

        <Section title="SKILLS">
          <div className="flex flex-wrap gap-2">
            {data.skills?.length
              ? data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
            border
            px-3
            py-1
            rounded-full
            "
                  >
                    {skill}
                  </span>
                ))
              : "Add skills"}
          </div>
        </Section>

        {/* PROJECTS */}

        <Section title="PROJECTS">
          {data.projects?.map((project, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold text-xl">
                {project.name || "Project Name"}
              </h3>

              <p>{project.tech}</p>

              <p>{project.description}</p>

              <p>
                {project.github} {project.live}
              </p>
            </div>
          ))}
        </Section>

        {/* EXPERIENCE */}

        <Section title="EXPERIENCE">
          {data.experience?.map((item, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold">{item.role}</h3>

              <p>{item.company}</p>

              <p>{item.description}</p>
            </div>
          ))}
        </Section>

        {/* EDUCATION */}

        <Section title="EDUCATION">
          {data.education?.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{item.degree}</h3>

              <p>{item.college}</p>

              <p>
                {item.year}

                {" | "}

                {item.cgpa}
              </p>
            </div>
          ))}
        </Section>

        {/* CERTIFICATIONS */}

        <Section title="CERTIFICATIONS">
          {data.certifications?.map((item, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold">{item.name}</h3>

              <p>{item.organization}</p>

              <p>{item.date}</p>

              <p>{item.credentialId}</p>
            </div>
          ))}
        </Section>

        {/* ACHIEVEMENTS */}

        <Section title="ACHIEVEMENTS">
          {data.achievements?.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold">{item.title}</h3>

              <p>{item.description}</p>

              <p>{item.date}</p>
            </div>
          ))}
        </Section>

        {/* LANGUAGES */}

        <Section title="LANGUAGES">
          {data.languages?.map((item, index) => (
            <p key={index}>
              {item.name}

              {" - "}

              {item.level}
            </p>
          ))}
        </Section>
      </div>
      <button
        onClick={handlePrint}
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
