import React from "react";

const ProfessionalTemplate = ({ resumeRef, fields, data }) => {
  return (
    <div
      ref={resumeRef}
      className="
      bg-white
      text-gray-800
      p-12
      "
    >
      {/* PERSONAL */}

      {fields.Personal && (
        <div className="flex justify-between border-b pb-8">
          <div>
            <h1 className="text-5xl font-bold">
              {data.personal?.name || "Your Name"}
            </h1>

            <p className="text-xl mt-2">
              {data.personal?.role || "Professional"}
            </p>

            <p className="mt-4">
              {data.personal?.email}

              {" | "}

              {data.personal?.phone}

              {" | "}

              {data.personal?.location}
            </p>

            <div className="mt-2">
              {data.personal?.github}

              {" | "}

              {data.personal?.linkedin}
            </div>
          </div>

          {data.personal?.photo && (
            <img
              src={data.personal.photo}
              className="
              w-36
              h-36
              rounded-full
              object-cover
              "
            />
          )}
        </div>
      )}

      {fields.Summary && (
        <Section title="Professional Summary">
          <p>{data.summary || "Your summary"}</p>
        </Section>
      )}

      {fields.Experience && (
        <Section title="Work Experience">
          {data.experience?.map((item, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold text-xl">{item.role}</h3>

              <p className="font-semibold">{item.company}</p>

              <p>{item.description}</p>
            </div>
          ))}
        </Section>
      )}

      {fields.Projects && (
        <Section title="Projects">
          {data.projects?.map((item, index) => (
            <div key={index} className="mb-5">
              <h3 className="font-bold">{item.name}</h3>

              <p className="italic">{item.tech}</p>

              <p>{item.description}</p>
            </div>
          ))}
        </Section>
      )}

      {fields.Education && (
        <Section title="Education">
          {data.education?.map((item, index) => (
            <div key={index}>
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

      {fields.Skills && (
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {data.skills?.map((skill, index) => (
              <span
                key={index}
                className="
            px-4
            py-2
            bg-gray-200
            rounded
            "
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}

      {fields.Certifications && (
        <Section title="Certifications">
          {data.certifications?.map((c, index) => (
            <p key={index}>
              {c.name}

              {" - "}

              {c.organization}
            </p>
          ))}
        </Section>
      )}

      {fields.Achievements && (
        <Section title="Achievements">
          {data.achievements?.map((a, index) => (
            <div key={index}>
              <b>{a.title}</b>

              <p>{a.description}</p>
            </div>
          ))}
        </Section>
      )}

      {fields.Languages && (
        <Section title="Languages">
          {data.languages?.map((l, index) => (
            <p key={index}>
              {l.name}

              {" - "}

              {l.level}
            </p>
          ))}
        </Section>
      )}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="my-8">
    <h2
      className="
text-2xl
font-bold
border-b-2
mb-4
pb-2
"
    >
      {title}
    </h2>

    {children}
  </div>
);

export default ProfessionalTemplate;
