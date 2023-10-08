# Factory
- a function to create many object instance without using new keyword. 
- it should return an new object instance.
- one use case is to add pre-defind properties when creating an object.
- instead of writing a same shape of object every time, use a fumction that return the same structure object.
 ```javascript
const user1 = {}
const user2 = {}

// instead
function createUser(name, age){
	return {
			name: name,
			age: age
	}
}
const user1 = createUser()
```
#  Module 

- when we write `module` and `export` it into other files we can have properties and methods hidden/encapsulated by not exporting them where we `import` it.
- in ES6 we use module pattern using `import` and `export`.
- before that we have to add `type=module` in script tag imported in HTML.
- also you can add `something.mjs` to use module

# Observable
- is way of thinking to handed function calls to a automatic system.
- when you have to call a `funtion something(){}` multiple where instead of calling `a()` in those places you can use observer pattern to call that function and notify others.
- there is no differences between Pub/Sub or Rxjs or Event with observable pattern, they all share the same idea.
- rxjs is library that uses observable pattern with more functionallity

# Prototype
- if you have same a function on multiple object, add that function to the class, and create your object from that class with constructor and new keyword.
- can implement with `object.create`
- memory efficient because prototype of your class have that function for all the other instances that have the same prototype.

# Proxy
- it sit between object and modification and intercept modification
- simply `set` & `get` for modifying person object in this example
- use cases are validation, logging, notification.
- trade of is if you add more logic to method, because in every interaction they will run, can take a longer to execute.

 ```javascript
const person = {
name: 'mohammad',
age: 24
}

// proxy
// target is same as person
const proxyPerson = new Proxy(person,{
  get: (target,prop) => {return Reflect.get(target,prop)},
  set: (target,prop,value) => {return Reflect.set(target,prop,value)}
})
```
# Singleton
- singleton is 1 instance thorough all the application.
- we can implement it using both `class` or `object`
- you have to modify singleton in its method not the outside.
-  freeze the singleton using `Object.freez` to insure it`s not modifiable
-  good form memory perspective
-  ES6 modules are singleton by default, if you write your module and import it into 2 files they share the same state

```javascript
let counter = 0

export default singletonCounter = Object.freeze({
increment: ()=> counter++,
decrement: ()=> counter--
})
```