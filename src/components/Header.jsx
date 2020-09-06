import React from "react";
import "./styles/Header.css";
import { resetAll, deleteCheckedTasks, invert } from "../state/actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const taskList = useSelector((state) => state.taskListReducer);
  const dispatchAction = useDispatch();

  function handleResetAll() {
    dispatchAction(resetAll());
  }

  function handleInvertSelection() {
    dispatchAction(invert());
  }

  function handleDeleteTask() {
    dispatchAction(deleteCheckedTasks());
  }

  function getDoneTasks(taskList) {
    let count = 0;
    taskList.forEach((task) => {
      task.done ? count++ : (count = count);
    });
    return count;
  }
  return (
    <div className="header">
      <div className="counter">
        <div>
          <span>Total : {taskList.length}</span>
        </div>
        <div>
          <span>Done : {getDoneTasks(taskList)}</span>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleInvertSelection}>Invert Selection</button>
        <button onClick={handleResetAll}>Reset All</button>
        <button onClick={handleDeleteTask}>Delete Done</button>
      </div>
    </div>
  );
};

export { Header };
