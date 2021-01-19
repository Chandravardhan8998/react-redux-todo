import React from "react";
import Counters from "../Components/Counters";
import TasksWIthInput from "../Components/TasksWIthInput";

export default function Home() {
  return (
    <div className="d-flex fd-column jc-center ai-center full-height">
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
