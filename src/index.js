import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import Home from "./Container/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import taskReducer from "./Store/Reducer/index";

import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  task: taskReducer,
});
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
