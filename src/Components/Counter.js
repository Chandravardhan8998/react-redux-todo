import React from "react";

export default function Counter({ title, count }) {
  return (
    <div className=" p-1 rounded m-1 d-flex jc-center ai-center fd-column">
      <p
        style={{
          height: 50,
          width: 50,
          verticalAlign: "middle",
          lineHeight: 2.5,
        }}
        className="rounded-circle bg-primary p-1 shadow text-light t-center"
      >
        {count}
      </p>
      <p className="t-center fw-bold">{title}</p>
    </div>
  );
}
