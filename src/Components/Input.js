import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Store/Action";
import { getRandomBetween } from "../Utility";

export default function Input() {
  const [Value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = () => {
    if (!!Value) {
      dispatch(
        addTask({
          task: Value,
          done: false,
          id: getRandomBetween(1000, 100000),
        })
      );
      setValue("");
    }
  };
  return (
    <div className="container m-2">
      <div className="row">
        <div className="col-9">
          <input
            className="form-control full-width"
            type="text"
            value={Value}
            placeholder="Enter Task"
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                onSubmitHandler();
              }
            }}
          />
        </div>
        <div className="col-3">
          <button
            className="btn mx-1 btn-primary btn-block"
            onClick={onSubmitHandler}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
