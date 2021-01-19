import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask, undoneTask } from "../Store/Action";
export default function Task({ task, done, id }) {
  const dispatch = useDispatch();
  const [Check, setCheck] = useState(!done);
  return (
    <div
      className={`rounded  ${
        done ? `border bg-success text-light` : `border border-secondary`
      }`}
      style={{
        position: "relative",
        width: "94%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 5,
      }}
    >
      <div
        onClick={() => {
          dispatch(Check ? doneTask(id) : undoneTask(id));
          setCheck(!Check);
        }}
        style={{
          textAlign: "left",
          flex: 10,
          height: "100%",
          textDecoration: done ? "line-through" : "none",
          verticalAlign: "center",
          fontSize: 18,
          padding: 10,
        }}
      >
        {task}
      </div>
      {done && (
        <div
          style={{
            display: "flex",
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              width: "100%",
              fontSize: 18,
              cursor: "default",
            }}
            onClick={() => {
              if (done) {
                dispatch(deleteTask(id));
                console.log("delete");
              }
            }}
            className="material-icons p-2 text-light text-center"
          >
            delete
          </span>
        </div>
      )}
    </div>
  );
}
