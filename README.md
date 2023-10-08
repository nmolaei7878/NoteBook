- if you update state based on the pervious update always do it with callback.
- wrap your state fns with another function and passed it to on click, to prevent creating it every time.
- requestAnimationFrame will run before paint, and recive a callback as parameter.
- fiber is fancy word for data structure that react use to keep track of component instances.
- with adding keys react will easly track what change on the list, and not update all the list.
- react 18 have automatic batching which means, if you trigger multiple state change at once, react batches them and go for it once.
- react hooks will care about the initial value, so dont put `function()` in useState as initial-value, beacuse it takes longer to evaulate the function result.

- put your state where they live, not at the parent, if you need that information passed it thorough callback.

- when you use memo on component, if values are passed by refrenced `"object"` use it with useMemo or useCallback, other wise thats not gone work.


#### Context API
- when you use `context api` and wrap it in the root level of your app, in every update you make, every thing wraped with your context will re-render, because every time you use your useContext, in the context.provider value={{items}} you are creating a new object, while data is the same as before the object is new and refrence to that object is different from last one, to avoid that you have to create another context

- `context` api is like hidden prop, when you use `useContext` and update something, all component wrap with `context.provider` will get a new prop, and new prop cause re-render, to avoid that you have to use 2 context, 1 for things that change(state) and 1 for thing that dont change(function to change state) like:
```javascript
const ItemsContext = useContext({})
const ActionContext = useContext({})

const ItemProvider = ({children}) => {
    const [items, dispatch] = useReducer(reducer, initialItem)

    return (
        <ActionContext.Provider value={dispatch}>
            <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
        </ActionContext.Provider>
    )
}

```
- the order matter, we wrap our state(Items) with dispatch beacuse dispatch will never change.
- any time you pass `<ActionContext.Provider value={{items}}>` with double bracket you create a new object.
- any time you pass `<ActionContext.Provider value={{users, items}}>`. in this senario you have to create a third context.

### Concurrent Rendering
- concurrent rendering added to react 18.
- `useTransition`: with this we tell react do this when you can (not urgent)
	- one use case is when your trying filter alist while user type in an input.
	- updating input is more urgent than filtering list
- `useDeferredValue` is also a way to tell react an update in not urgent, but this one wraps the value and `useTransition` will wrap the state.

### Import & Code Splitting
- __Static Import__ `import somthing from 'something.js'` is static import, will import the whole module, js engine will fetch and execute it immedeatly, but the trade of is static import will increase the bundle size.
- __Named Import__ `import {something} from 'something.js'` is name import and it just import that function from module not anything else.
- __Dynamic Import__ we can load components with `dynamic import`using `suspense` and `lazy` ,with dynamic import we create another bundle for our lazy load components automatically without touching our module bundler (webpack).
	- you can name your webpack chunk with webpack comment like : 
	- `const Component = React.lazy(()=> import (/*webpackChunkName: "your given name"*/ './components/yourcomponent'))`.
	- this approach is good for initial load time, due to reducing bundle size.
	- dont lazy load component that your showing on initial render.
	 - you have to care about `layout shift` with dynamic import.

- __import on visibility__ : we can load components when they are visible to the user, with `react-intersection-observer`.

```javascript
 `const {ref, inView} = useInView()`

 <div ref={ref}>
	 <Suspense fallback={<div/>}>
		 {InView && <YourComponent />}
	 </Suspense>
 </div>
```

- __Route Base Splitting__ : you can lazy load a route with `Suspense` and `lazy`.

- __Prefetch__: we can tell the browser to download something, when browser is ideal and based on the user-story we know we need something in certain point, with this we tell browser to fetch something and cache it and when we need it read it from cache.
	- we can prefetch resource explicitly in `head` of `html` like:
	- `<link rel='prefetch' href="./about.bundle.js"/>`, (if you dont know the bundle name use webpack magic comment like below)
	- or in webpack
	- `const About = React.lazy(()=> import(/*webpackPrefetch: true*/ "about.js"))`
	- use full if you combine it with lazy loading routes.
- implementation is like prefetch just use `preload` instead of 'prefetch'

> __Preload__ VS __Prefetch__ : 
> you can use both to download a chunk.bundle, images, fonts, script, css.
> with `prefetch` you hint the browser you need some resources, fetch or not depends on the browser with low priority in the background.
> with `preload` browser will get your resources, forcebliy.

- you can preload thing with `useHover` hook.