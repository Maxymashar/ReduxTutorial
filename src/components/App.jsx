import React from "react";
import { TaskList } from "./TaskList";
import { Header } from "./Header";
import { TaskAdder } from "./TaskAdder";
import { store } from "../state";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <TaskAdder />
        <TaskList />
      </div>
    </Provider>
  );
};

export { App };
