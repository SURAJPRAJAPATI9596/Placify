const Input = ({ placeholder, ...props }) => (
  <input
    {...props}
    placeholder={placeholder}
    className="
    w-full
    p-3
    rounded-lg
    border
    bg-(--bg-primary)
    text-(--text-primary)
    "
  />
);

export default Input;
