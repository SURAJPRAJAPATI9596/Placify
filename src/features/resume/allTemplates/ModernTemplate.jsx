import React from "react";

const ModernTemplate = ({ resumeRef, fields, data }) => {
  return (
    <div ref={resumeRef} className="bg-white p-10 text-gray-800">
      {/* HEADER */}

      {fields.Personal && (
        <div className="flex justify-between items-center border-b pb-6">
          <div>
            <h1 className="text-5xl font-bold text-blue-600">
              {data.personal?.name || "Your Name"}
            </h1>

            <p className="text-xl mt-2">{data.personal?.role || "Developer"}</p>

            <p className="mt-3">
              {data.personal?.email}
              {" | "}
              {data.personal?.phone}
            </p>

            <p>{data.personal?.location}</p>
          </div>

          {/* PHOTO SUPPORT */}
          {data.personal?.photo && (
            <img
              src={data.personal.photo}
              className="w-32 h-32 rounded-full object-cover"
            />
          )}
        </div>
      )}

      {fields.Summary && (
        <Section title="Profile">{data.summary || "Your summary"}</Section>
      )}

      {fields.Skills && (
        <Section title="Skills">
          <div className="flex flex-wrap gap-3">
            {data.skills?.map((skill, i) => (
              <span key={i} className="bg-blue-100 px-4 py-2 rounded">
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}

      {fields.Projects && (
        <Section title="Projects">
          {data.projects?.map((p, i) => (
            <div key={i} className="mb-5">
              <h3 className="font-bold text-xl">{p.name}</h3>

              <p>{p.tech}</p>

              <p>{p.description}</p>
            </div>
          ))}
        </Section>
      )}

      {fields.Experience && (
        <Section title="Experience">
          {data.experience?.map((e, i) => (
            <div key={i}>
              <h3 className="font-bold">{e.role}</h3>

              <p>{e.company}</p>

              <p>{e.description}</p>
            </div>
          ))}
        </Section>
      )}

      {fields.Education && (
        <Section title="Education">
          {data.education?.map((e, i) => (
            <div key={i}>
              <h3 className="font-bold">{e.degree}</h3>

              <p>{e.college}</p>

              <p>
                {e.year} | {e.cgpa}
              </p>
            </div>
          ))}
        </Section>
      )}

      {fields.Certifications && (
        <Section title="Certificates">
          {data.certifications?.map((c, i) => (
            <p key={i}>
              {c.name}
              {" - "}
              {c.organization}
            </p>
          ))}
        </Section>
      )}

      {fields.Achievements && (
        <Section title="Achievements">
          {data.achievements?.map((a, i) => (
            <div key={i}>
              <b>{a.title}</b>
              <p>{a.description}</p>
            </div>
          ))}
        </Section>
      )}

      {fields.Languages && (
        <Section title="Languages">
          {data.languages?.map((l, i) => (
            <p key={i}>
              {l.name} - {l.level}
            </p>
          ))}
        </Section>
      )}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold text-blue-600 mb-3">{title}</h2>

    {children}
  </div>
);

export default ModernTemplate;
