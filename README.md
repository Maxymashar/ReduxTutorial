# Redux Tutorial

##

> Globalized external state

## 🎬 Action

> Describes what 'event' has happened that will change the state

## Reducer

> Describes how the action modifies the state

## 1️⃣ Create the store

```jsx
import { createStore } from "redux";

const store = createStore(reducer);
```

## 2️⃣ Create an action

An action is a function that returns an object

```jsx
const action = () => ({ type: "increment" });
```

## 3️⃣ Create a Reducer

```jsx
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    default:
      return currentState;
  }
};
```

## 4️⃣ React-Redux

To give the components access to the state,Wrap all the components with the `Provider`

```jsx
import { Provider } from "react-redux";

const App = () => <Provider store={store}>{/*Components*/}</Provider>;
```

## 5️⃣ Getting access to the state

```jsx
import { useSelector } from "react-redux";

const state = useSelector((state) => state.reducerName);
```

## 6️⃣ Changing the State

```jsx
import { useDispatch } from "react-redux";
import { increaseAction } from "./actions";

const dispatch = useDispatch();
//dispatch(increaseAction)
```
