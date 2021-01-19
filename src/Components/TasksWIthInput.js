import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Input from "./Input";
import Task from "./Task";

export default function TasksWIthInput() {
  const [Tasks, setTasks] = useState([]);
  const [Loading] = useState(false);
  const task = useSelector((state) => state.task.task);
  // eslint-disable-next-line no-unused-vars
  const loading = useSelector((state) => state.task.loading);
  useEffect(() => {
    setTasks(task);
  }, [task]);
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      className="border p-3"
    >
      <Input />
      {Loading ? (
        <h1>Loading</h1>
      ) : (
        <div
          // className="list-group list-group-flush container"
          style={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {Tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              task={task.task}
              done={task.done}
            />
          ))}
        </div>
      )}
    </div>
  );
}
