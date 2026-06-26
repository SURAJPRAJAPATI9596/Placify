import React from "react";

const Status = ({ columns, count }) => {
  return (
    <div
      className="
grid
grid-cols-2
lg:grid-cols-4
gap-4
mt-8
"
    >
      {columns.map((x) => (
        <div
          key={x}
          className="
bg-white/10
p-5
rounded-2xl
"
        >
          <p>{x}</p>

          <h2 className="text-3xl font-bold">{count(x)}</h2>
        </div>
      ))}
    </div>
  );
};

export default Status;
