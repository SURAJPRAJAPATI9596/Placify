import React from "react";

const Card = ({ title, children }) => (
  <div
    className="
p-6
rounded-xl
bg-(--bg-primary)
text-(--text-primary)
border
border-white/10
"
  >
    <h2 className="text-2xl font-bold mb-5">{title}</h2>

    <div className="space-y-3">{children}</div>
  </div>
);

const TextResult = ({ atsData }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <Card title="Keywords Found">
        {atsData.keywordsFound?.map((x) => (
          <p key={x}>✅ {x}</p>
        ))}
      </Card>

      <Card title="Missing Keywords">
        {atsData.missingKeywords?.map((x) => (
          <p key={x}>❌ {x}</p>
        ))}
      </Card>
      <Card title="Strengths">
        {atsData.strengths?.map((x) => (
          <p key={x}>✓ {x}</p>
        ))}
      </Card>

      <Card title="Improvements">
        {atsData.improvements?.map((x) => (
          <p key={x}>⚠ {x}</p>
        ))}
      </Card>
      <Card title="Suggested Skills">
        {atsData.suggestedSkills?.map((x) => (
          <p key={x}>💡 {x}</p>
        ))}
      </Card>
      <Card title="Placify Feedback">{atsData.overallFeedback}</Card>
    </div>
  );
};

export default TextResult;
