export const ADD_TASK = "ADD_TASK";
export const ADD_TASK_END = "ADD_TASK_END";
export const ADD_TASK_START = "ADD_TASK_START";

export const FETCH_LENGTH = "FETCH_LENGTH";
export const FETCH_LENGTH_START = "FETCH_LENGTH_START";
export const FETCH_LENGTH_END = "FETCH_LENGTH_END";

export const DELETE_TASK = "DELETE_TASK";
export const DONE_TASK = "DONE_TASK";
export const UNDONE_TASK = "UNDONE_TASK";

export const addTask = (task) => {
  return (dispatch) => {
    dispatch({ type: ADD_TASK_START });
    dispatch({ type: ADD_TASK, task });
    dispatch({ type: ADD_TASK_END });
  };
};

export const fetchLength = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LENGTH_START });
    dispatch({ type: FETCH_LENGTH });
    dispatch({ type: FETCH_LENGTH_END });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TASK, id });
  };
};

export const doneTask = (id) => {
  return (dispatch) => {
    return dispatch({
      type: DONE_TASK,
      id,
    });
  };
};
export const undoneTask = (id) => {
  return (dispatch) => {
    return dispatch({
      type: UNDONE_TASK,
      id,
    });
  };
};
