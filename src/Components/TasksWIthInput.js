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
      }}
      className="border p-3 d-flex fd-column jc-start ai-center"
    >
      <Input />
      {Loading ? (
        <h1>Loading</h1>
      ) : (
        <div
          className="full-width full-width-p d-flex jc-start ai-center fd-column"
          style={{
            overflowY: "scroll",
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
