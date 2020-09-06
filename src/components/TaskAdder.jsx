import React from "react";
import "./styles/TaskAdder.css";
import { useDispatch, useSelector } from "react-redux";
import { nameInput, timeInput, addNewTask } from "../state/actions";

const TaskAdder = () => {
  const dispatchAction = useDispatch();

  const { taskName, taskTime } = useSelector(
    (state) => state.taskDetailsReducer
  );

  function reset() {
    dispatchAction(nameInput(""));
    dispatchAction(timeInput(""));
  }

  function handleNameChange({ target: { value } }) {
    dispatchAction(nameInput(value));
  }

  function handleTimeChange({ target: { value } }) {
    dispatchAction(timeInput(value));
  }

  function handleAddNewTask() {
    if (taskName.trim() && taskTime.trim()) {
      dispatchAction(
        addNewTask({ taskName, time: taskTime, id: Math.random(), done: false })
      );
      reset();
    }
  }

  return (
    <div className="taskAdder">
      <input
        type="text"
        placeholder="Task Name"
        autoComplete="off"
        value={taskName}
        onChange={handleNameChange}
      />
      <input type="time" value={taskTime} onChange={handleTimeChange} />
      <button onClick={handleAddNewTask}>Add Task</button>
    </div>
  );
};

export { TaskAdder };
