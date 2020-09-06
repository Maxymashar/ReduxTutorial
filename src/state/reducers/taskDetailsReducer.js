const initialState = { taskName: "", taskTime: "" };

const taskDetailsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "onTaskNameInput":
      return { ...currentState, taskName: action.payload.value };
    case "onTaskTimeInput":
      return { ...currentState, taskTime: action.payload.value };
    default:
      return currentState;
  }
};

export { taskDetailsReducer };
