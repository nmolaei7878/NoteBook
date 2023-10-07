- if you update state based on the pervious update always do it with callback.
- wrap your state fns with another function and passed it to on click, to prevent creating it every time.
- requestAnimationFrame will run before paint, and recive a callback as parameter.
- fiber is fancy word for data structure that react use to keep track of component instances.
- with adding keys react will easly track what change on the list, and not update all the list.
- react 18 have automatic batching which means, if you trigger multiple state change at once, react batches them and go for it once.
- react hooks will care about the initial value, so dont put `function()` in useState as initial-value, beacuse it takes longer to evaulate the function result.

- put your state where they live, not at the parent, if you need that information passed it thorough callback.

- when you use memo on component, if values are passed by refrenced `"object"` use it with useMemo or useCallback, other wise thats not gone work.

- when you use `context api` and wrap it in the root level of your app, in every update/dispatch you make, every thing wraped with your context will re-render, because every time you use your useContext, in the context.provider value={{items}} you are creating a new object, while data is the same as before the object is new and refrence to that object is different from last one, to avoid that you have to create another context