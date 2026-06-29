import React from "react";

const DeveloperTemplate = ({ resumeRef, fields, data }) => {
  return (
    <div ref={resumeRef} className="bg-black text-green-400 p-10 font-mono">
      {fields.Personal && (
        <div>
          <h1 className="text-4xl">{data.personal?.name}</h1>

          <p>{data.personal?.github}</p>
        </div>
      )}

      {fields.Skills && (
        <Block title="Tech Stack">
          {data.skills?.map((s, i) => (
            <p key={i}>
              {">"} {s}
            </p>
          ))}
        </Block>
      )}

      {fields.Projects && (
        <Block title="Projects">
          {data.projects?.map((p, i) => (
            <div key={i}>
              <h3>{p.name}</h3>

              <p>{p.tech}</p>
            </div>
          ))}
        </Block>
      )}

      {fields.Experience && (
        <Block title="Experience">
          {data.experience?.map((e, i) => (
            <p key={i}>
              {e.role}@{e.company}
            </p>
          ))}
        </Block>
      )}
    </div>
  );
};

const Block = ({ title, children }) => (
  <div className="mt-8">
    <h2>## {title}</h2>

    {children}
  </div>
);

export default DeveloperTemplate;
