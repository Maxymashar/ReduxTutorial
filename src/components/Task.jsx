import React from "react";
import "./styles/Task.css";
import { useDispatch } from "react-redux";
import { changeCheckState } from "../state/actions";

const Task = ({ taskName, id, done, time }) => {
  const dispatchAction = useDispatch();

  function handleCheckChange() {
    dispatchAction(changeCheckState(id));
  }

  return (
    <div className="task">
      <div className="taskName">
        <span>{taskName}</span>
      </div>
      <div className="taskTime">
        <span>{time}</span>
      </div>
      <input type="checkbox" checked={done} onChange={handleCheckChange} />
    </div>
  );
};

export { Task };
