import React from "react";

const CreativeTemplate = ({ resumeRef, fields, data }) => {
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
          <h1 className="text-5xl font-bold">{data.personal?.name}</h1>

          <p>{data.personal?.email}</p>
        </div>
      )}

      {fields.Summary && (
        <div className="mt-8">
          <h2>ABOUT ME</h2>

          <p>{data.summary}</p>
        </div>
      )}

      {fields.Achievements && (
        <div>
          <h2>Achievements</h2>

          {data.achievements?.map((a, i) => (
            <p key={i}>{a.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreativeTemplate;
