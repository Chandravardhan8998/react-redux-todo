/* eslint-disable import/no-anonymous-default-export */
import { getRandomBetween } from "../../Utility";
import {
  ADD_TASK,
  ADD_TASK_END,
  ADD_TASK_START,
  DELETE_TASK,
  DONE_TASK,
  FETCH_LENGTH,
  FETCH_LENGTH_END,
  FETCH_LENGTH_START,
  UNDONE_TASK,
} from "../Action";

const initialState = {
  task: [
    { id: getRandomBetween(1000, 100000), task: "complete milk", done: false },
    {
      id: getRandomBetween(1000, 100000),
      task: "complete project",
      done: false,
    },
  ],
  loading: false,
};

export default (state = initialState, action) => {
  const addTask = (task) => {
    let currentTask = state.task;
    currentTask.unshift(task);
    return currentTask;
  };
  const deleteTask = (id) => {
    let currentTask = state.task;
    return currentTask.filter((task) => task.id !== +id);
  };
  const doneTask = (id) => {
    let currentTask = state.task;
    return currentTask.map((task) => {
      if (task.id === +id) {
        return {
          ...task,
          done: true,
        };
      } else {
        return task;
      }
    });
  };
  const undoneTask = (id) => {
    let currentTask = state.task;
    return currentTask.map((task) => {
      if (task.id === +id) {
        return {
          ...task,
          done: false,
        };
      } else {
        return task;
      }
    });
  };

  switch (action.type) {
    case ADD_TASK: {
      return { ...state, task: addTask(action.task) };
    }
    case ADD_TASK_START:
      return { ...state, loading: true };
    case ADD_TASK_END:
      return { ...state, loading: false };
    case FETCH_LENGTH_START: {
      return { ...state, loading: true };
    }
    case FETCH_LENGTH: {
      return { ...state, loading: true };
    }
    case FETCH_LENGTH_END: {
      return { ...state, loading: true };
    }
    case DELETE_TASK: {
      return { ...state, task: deleteTask(action.id) };
    }
    case DONE_TASK: {
      return { ...state, task: doneTask(action.id) };
    }
    case UNDONE_TASK:
      return { ...state, task: undoneTask(action.id) };
    default:
      return state;
  }
};
