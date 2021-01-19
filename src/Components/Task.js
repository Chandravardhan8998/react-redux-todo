import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask, undoneTask } from "../Store/Action";
export default function Task({ task, done, id }) {
  const dispatch = useDispatch();
  const [Check, setCheck] = useState(!done);
  return (
    <div
      className={`rounded  ${
        done
          ? `border bg-success text-light fw-bold`
          : `border border-secondary`
      } p-relative d-flex fd-row jc-start ai-center m-1`}
      style={{
        width: "94%",
      }}
    >
      <div
        onClick={() => {
          dispatch(Check ? doneTask(id) : undoneTask(id));
          setCheck(!Check);
        }}
        className="t-center full-height-p p-2"
        style={{
          flex: 10,
          verticalAlign: "center",
          fontSize: 18,
        }}
      >
        {task}
      </div>
      {done && (
        <div
          className="d-flex fd-row jc-center ai-center full-width full-height-p"
          style={{
            flex: 2,
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              fontSize: 18,
              cursor: "pointer",
            }}
            onClick={() => {
              if (done) {
                dispatch(deleteTask(id));
                console.log("delete");
              }
            }}
            className="
            full-width
            material-icons p-2 text-light text-center"
          >
            delete
          </span>
        </div>
      )}
    </div>
  );
}
