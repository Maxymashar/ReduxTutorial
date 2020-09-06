const addNewTask = (newTask) => ({
  type: "onAddNewTask",
  payload: { task: newTask },
});

const deleteCheckedTasks = () => ({
  type: "onDeleteCheckedTasks",
});

const nameInput = (text) => ({
  type: "onTaskNameInput",
  payload: { value: text },
});

const timeInput = (time) => ({
  type: "onTaskTimeInput",
  payload: { value: time },
});

const changeCheckState = (taskId) => ({
  type: "onChangeCheckState",
  payload: { id: taskId },
});

const resetAll = () => ({ type: "onResetAll" });

const invert = () => ({ type: "onInvert" });

export {
  addNewTask,
  nameInput,
  timeInput,
  changeCheckState,
  resetAll,
  invert,
  deleteCheckedTasks,
};
