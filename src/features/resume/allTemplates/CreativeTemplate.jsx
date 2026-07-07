import React from "react";

const CreativeTemplate = ({ resumeRef, fields, resumeData }) => {
  return (
    <div
      ref={resumeRef}
      className="
bg-gradient-to-br
from-purple-600
to-pink-500
text-white
p-10
rounded-xl
"
    >
      {fields.Personal && (
        <div>
          <h1 className="text-5xl font-bold">{resumeData.personal?.name}</h1>

          <p>{resumeData.personal?.email}</p>
        </div>
      )}

      {fields.Summary && (
        <div className="mt-8">
          <h2>ABOUT ME</h2>

          <p>{resumeData.summary}</p>
        </div>
      )}

      {fields.Achievements && (
        <div>
          <h2>Achievements</h2>

          {resumeData.achievements?.map((a, i) => (
            <p key={i}>{a.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreativeTemplate;
