# React Patterns

### Container - Presentation
- create a `container component` to do things like fetching data.
- create a `presentation component` of that task is show the UI.
- container will render presentation component in it self, and presentation component receive data thorough prop.

### Higher Order Component
- wraps another component and pass logic to it.

- create a `withLoader` HOC for component that should fetch data and show loading.

- HOC withLoader
```javascript
const withloader = (Component,url) => {

return (props) => {

const [data, setData] = useState()

useEffect(() => {

const data = fetch(url)

setData(data)

}, [])

if (!data) {

return <Loading>loading</Loading>

}
return <Component {...props} data={data} />
}
}
export default withloader
```

- Component
```javascript
function Component(props){
return <></>
export withLoader(Component, url)
}
```
# React Architectures
### Classic Architecture
- pages
- components
- store
- assets
- service

- this is class Architecture and it is good for pet project and small project.
- it is hard to refactor and maintain this kind of Architecture, because they are highly dependent to each other with and module.

### Modular Architecture
- UI
- Components
- Modules 
- Pages

- UI layer is for highly reusable pisces of ui like: input, button without business logic.
- Component layer is combination of ui pisces, can hold base logic, it is like higher abstraction for UI layer.
- Modules every thing in here should be compeletly independent from other thing and every module should have `index.js` file to `import` and `export`. define everything related to this module in its own like `helper fns`, `constants`, `api layer`
- Pages layer: every element in the pages directory is a combination of different modules,The key difference between pages and modules is logic thickness