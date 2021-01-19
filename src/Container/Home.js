import React from "react";
import Counters from "../Components/Counters";
import TasksWIthInput from "../Components/TasksWIthInput";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "80vh",
        }}
      >
        <Counters />
        <TasksWIthInput />
      </div>
    </div>
  );
}
