import React from "react";

export default function Counter({ title, count }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className=" p-1 rounded m-1"
    >
      <p
        style={{
          textAlign: "center",
          height: 50,
          width: 50,
          textAlignLast: "center",
          verticalAlign: "middle",
          lineHeight: 2.5,
        }}
        className="rounded-circle bg-primary p-1 shadow text-light"
      >
        {count}
      </p>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>{title}</p>
    </div>
  );
}
