# Pure State-Management

> **useState :** both state `items` and change state function `setItems` are in the component it self and in the same array, the `setItems` function not gone change as react team says it, but it is good to decouple `state logic` from `view` using `useReducer` cause 2 reason:

    1. eaiser unit test,
    2. unecceray re-renders

> **useState vs useReducer :** useState internally uses useReducer in it, but from performance perspective, we want to re-render our list of items if a item was removed or a new item added to the list, but we dont want to re-render if a property of a item changes, with decoupling our `change state function` and `useCallback` we can get rid of unccecary re-renders with `useReducer`, we cant do it with `useState` because our useCallback dependency list is depend on useState `[item, setItem]` and this list on every re-render is a new array, and we know our chaning state logic is not gone change, but the state will change.

### Reducer

- `reducer`: is a simple javascript function that recieves 2 argumnet `state` and `action`, and create a `new state` as result.

```javascript
const reducer = (state, action) => {
  return state;
};
```

### useReducer React

- `key`: optionally you can extract your action keys in constant to not encounterd a `typo`.

```javascript
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
```

- `dispatch`: when you want to update a state `dispatch` your `action`.

```javascript
function addItem(item) {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
}
```

- `useReducer`

```javascript
const reducer = (state, action) => {
  if (action.type == ADD_ITEM) {
    return [action.payload, ...state];
  }
  return state;
};
const ComponentA = () => {
  const [item, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
};
```

# Redux

# Redux Toolkit
