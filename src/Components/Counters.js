import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_LENGTH_END, FETCH_LENGTH_START } from "../Store/Action";
import Counter from "./Counter";

export default function Counters() {
  const [RemainTask, setRemainTask] = useState(0);
  const [DoneTask, setDoneTask] = useState(0);

  const task = useSelector((state) => state.task.task);
  const loading = useSelector((state) => state.task.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_LENGTH_START });
    const remainCount = task.filter((t) => !t.done);
    const doneCount = task.filter((t) => !!t.done);
    setRemainTask(remainCount.length);
    setDoneTask(doneCount.length);
    dispatch({ type: FETCH_LENGTH_END });
    // console.log(remainCount.length);
  }, [task, loading, dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Counter count={RemainTask} title="Remaining Tasks" />
      <Counter count={DoneTask} title="Completed Tasks" />
    </div>
  );
}
