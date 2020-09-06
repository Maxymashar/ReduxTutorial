import React from "react";
import { Task } from "./Task";
import "./styles/TaskList.css";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskListReducer);
  return (
    <div className="taskList">
      {taskList.map(({ taskName, id, done, time }) => (
        <Task taskName={taskName} id={id} key={id} done={done} time={time} />
      ))}
    </div>
  );
};

export { TaskList };
