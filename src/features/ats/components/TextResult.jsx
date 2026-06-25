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

const TextResult = ({ dark }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <Card title="Keywords Found">
        {["React", "JavaScript", "HTML", "CSS", "Tailwind"].map((x) => (
          <p key={x}>✅ {x}</p>
        ))}
      </Card>

      <Card title="Missing Keywords">
        {["TypeScript", "Redux", "Docker"].map((x) => (
          <p key={x}>❌ {x}</p>
        ))}
      </Card>
      <Card dark={dark} title="Strengths">
        {[
          "Well structured resume",
          "Strong projects",
          "Good skills",
          "ATS friendly format",
        ].map((x) => (
          <p key={x}>✓ {x}</p>
        ))}
      </Card>

      <Card dark={dark} title="Improvements">
        {[
          "Add certifications",
          "Add achievements",
          "Mention measurable results",
        ].map((x) => (
          <p key={x}>⚠ {x}</p>
        ))}
      </Card>
    </div>
  );
};

export default TextResult;

// (<div className="grid md:grid-cols-2 gap-8 mt-10">
//           <Card title="Keywords Found">
//             {["React", "JavaScript", "HTML", "CSS", "Tailwind"].map((x) => (
//               <p key={x}>✅ {x}</p>
//             ))}
//           </Card>

//           <Card title="Missing Keywords">
//             {["TypeScript", "Redux", "Docker"].map((x) => (
//               <p key={x}>❌ {x}</p>
//             ))}
//           </Card>
//           <Card dark={dark} title="Strengths">
//             {[
//               "Well structured resume",
//               "Strong projects",
//               "Good skills",
//               "ATS friendly format",
//             ].map((x) => (
//               <p key={x}>✓ {x}</p>
//             ))}
//           </Card>

//           <Card dark={dark} title="Improvements">
//             {[
//               "Add certifications",
//               "Add achievements",
//               "Mention measurable results",
//             ].map((x) => (
//               <p key={x}>⚠ {x}</p>
//             ))}
//           </Card>
//         </div>
// ) = ({ title, children }) => (
//   <div
//     className="
// p-6
// rounded-xl
// bg-(--bg-primary)
// text-(--text-primary)
// border
// border-white/10
// "
//   >
//     <h2 className="text-2xl font-bold mb-5">{title}</h2>

//     <div className="space-y-3">{children}</div>
//   </div>
// );
