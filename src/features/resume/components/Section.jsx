const Section = ({ title, children }) => (
  <div className="p-5 rounded-xl">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>

    <div className="space-y-4">{children}</div>
  </div>
);

const Input = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    className="
w-full
p-3
rounded-lg
border
bg-transparent
"
  />
);

export default Section;
