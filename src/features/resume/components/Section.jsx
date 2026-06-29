const Section = ({ title, children }) => (
  <div
    className="
p-5
rounded-xl
border-[0.4px]
bg-(--bg-primary)
text-(--text-primary)
"
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>

    <div className="space-y-4">{children}</div>
  </div>
);

export default Section;
