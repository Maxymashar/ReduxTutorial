const initialState = [];

const taskListReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "onAddNewTask":
      return [...currentState, action.payload.task];
    case "onDeleteCheckedTasks":
      return currentState.filter((task) => !task.done);
    case "onChangeCheckState":
      return currentState.map((task) =>
        task.id === action.payload.id ? { ...task, done: !task.done } : task
      );
    case "onResetAll":
      return currentState.map((task) => ({ ...task, done: false }));
    case "onInvert":
      return currentState.map((task) => ({ ...task, done: !task.done }));
    default:
      return currentState;
  }
};

export { taskListReducer };
