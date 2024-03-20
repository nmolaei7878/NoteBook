# OOP Paradiam JS

> in oop world we want to keep our state and behavior in the same place like a package, some kind of bundle
>
> 1. Solution: is to add our methods to the same object that our state lives, with this approach we reach to our goal but we are copying the same functionallity agina and again. imagine a product object with behavior to add to basket.

```javascript
const userObject = {
  name: "jack",
  login: function () {
    // login functionallity
  },
};
userObject.login();
```

> 2. Solution: we can use the native behavior of JS to add our functionality to the prototype object, every object created with our factory function will automatically get the same prototype.

```javascript
// a factory function to create object and methods on it
function CreateUser(name) {
  // this will add our functionallity to prototype of object and return an empty object
  const newUser = Object.Create(FunctionStore);
  newUser.name = name;
  return newUser;
}

const FunctionStore = {
  login: function () {
    // login functionallity
  },
};

const user1 = CreateUser("Jack");
user1.login();
```

> js will first look at object to find the method to execute it, if couldnt find it goes up the prototype chain and tries to find the method and execute it.

- is a way of coding, that both state(propertis) and behavior(methods) lives togheter
- a technic to add property to a prototype of an object is to use `Object.Create()`.
- with a fctory function that will return a object with given parameter, you can add functionality to ** proto ** of object, in this way you can add fns to parent of object and every object that will created as child of that or with the same factory fn can use that.
- you have to pass your fns or properties to `Object.Create(Params in here)`, this function will return you an empty object, but add params to `__ proto __`.
  > `__ proto __` is hidden property but you can see it in chrome dev tools
- what happens is when you want to invoke a function on an object that not exsist on object it slef, js by nature go and tries to find that fn in `__ proto __`, and beacuse we add our fn to proto it will find and execute it.

- by default all objects have a ** proto ** preperty that is linking to big ibject called `Object.protoype` full of usefull methods.

# Functional JS
