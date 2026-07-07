import React from "react";

const MinimalTemplate = ({ resumeRef, fields, resumeData }) => {
  return (
    <div ref={resumeRef} className="p-12 font-serif">
      {fields.Personal && (
        <header>
          <h1 className="text-5xl font-bold">
            {resumeData.personal?.name || "Your Name"}
          </h1>

          <p>
            {resumeData.personal?.email}
            {" | "}
            {resumeData.personal?.phone}
          </p>
        </header>
      )}

      {fields.Summary && (
        <Block title="Summary">
          <p>{resumeData.summary}</p>
        </Block>
      )}

      {fields.Skills && (
        <Block title="Skills">
          <p>{resumeData.skills?.join(", ")}</p>
        </Block>
      )}

      {fields.Projects && (
        <Block title="Projects">
          {resumeData.projects?.map((p, i) => (
            <div key={i}>
              <h3>{p.name}</h3>

              <p>{p.description}</p>
            </div>
          ))}
        </Block>
      )}

      {fields.Experience && (
        <Block title="Experience">
          {resumeData.experience?.map((e, i) => (
            <div key={i}>
              <b>{e.role}</b>

              <p>{e.company}</p>
            </div>
          ))}
        </Block>
      )}

      {fields.Education && (
        <Block title="Education">
          {resumeData.education?.map((e, i) => (
            <p key={i}>
              {e.degree}-{e.college}
            </p>
          ))}
        </Block>
      )}
    </div>
  );
};

const Block = ({ title, children }) => (
  <section className="my-8">
    <h2 className="border-b text-xl font-bold">{title}</h2>

    {children}
  </section>
);

export default MinimalTemplate;
