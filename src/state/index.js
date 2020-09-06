import { createStore, combineReducers } from "redux";
import { taskListReducer } from "./reducers/taskListReducer";
import { taskDetailsReducer } from "./reducers/taskDetailsReducer";

const rootReducer = combineReducers({ taskListReducer, taskDetailsReducer });
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
