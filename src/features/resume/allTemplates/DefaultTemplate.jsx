import React from "react";

const DefaultTemplate = ({ resumeRef, fields, resumeData }) => {
  return (
    <div ref={resumeRef} className="pl-6">
      {/* PERSONAL */}

      {fields.Personal && (
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {resumeData.personal?.name || "Your Name"}
          </h1>

          <h3 className="text-xl mt-2">
            {resumeData.personal?.role || "Frontend Developer"}
          </h3>

          <p className="mt-3">
            {resumeData.personal?.email}

            {" | "}

            {resumeData.personal?.phone}

            {" | "}

            {resumeData.personal?.location}
          </p>

          <div className="mt-3">
            {resumeData.personal?.github && (
              <span>Github : {resumeData.personal.github}</span>
            )}

            {" | "}

            {resumeData.personal?.linkedin && (
              <span>LinkedIn : {resumeData.personal.linkedin}</span>
            )}
          </div>
        </div>
      )}

      {fields.Personal && <hr className="my-6" />}

      {/* SUMMARY */}

      {fields.Summary && (
        <Section title="SUMMARY">
          <p>{resumeData.summary || "Your professional summary"}</p>
        </Section>
      )}

      {/* SKILLS */}

      {fields.Skills && (
        <Section title="SKILLS">
          <div className="flex flex-wrap gap-2">
            {resumeData.skills?.length
              ? resumeData.skills.map((skill, index) => (
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
      )}

      {/* PROJECTS */}

      {fields.Projects && (
        <Section title="PROJECTS">
          {resumeData.projects?.map((project, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold text-xl">
                {project.name || "Project Name"}
              </h3>

              <p>{project.tech}</p>

              <p>{project.description}</p>
            </div>
          ))}
        </Section>
      )}

      {/* EXPERIENCE */}

      {fields.Experience && (
        <Section title="EXPERIENCE">
          {resumeData.experience?.map((item, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold">{item.role}</h3>

              <p>{item.company}</p>

              <p>{item.description}</p>
            </div>
          ))}
        </Section>
      )}

      {/* EDUCATION */}

      {fields.Education && (
        <Section title="EDUCATION">
          {resumeData.education?.map((item, index) => (
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
      )}

      {/* CERTIFICATIONS */}

      {fields.Certifications && (
        <Section title="CERTIFICATIONS">
          {resumeData.certifications?.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold">{item.name}</h3>

              <p>{item.organization}</p>

              <p>{item.date}</p>
            </div>
          ))}
        </Section>
      )}

      {/* ACHIEVEMENTS */}

      {fields.Achievements && (
        <Section title="ACHIEVEMENTS">
          {resumeData.achievements?.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold">{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </Section>
      )}

      {/* LANGUAGES */}

      {fields.Languages && (
        <Section title="LANGUAGES">
          {resumeData.languages?.map((item, index) => (
            <p key={index}>
              {item.name}

              {" - "}

              {item.level}
            </p>
          ))}
        </Section>
      )}
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
export default DefaultTemplate;
