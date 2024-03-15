## Types

- we have 2 category of data types in **javascript** which are `primitive` type and `refrence` type.
- `string, number, `Boolean`, null, undifiend, symbol` and `bigInt` as **`primitive`** types they are accessbile via **value**.
- **`primitive`** types are store in **stack memory**.
- `object`, `function`, `array` are **refrence** type.
- **refrence** types are accessible via **pointers** from **stack memory** and actual value get store in **heap memory**.

## Boxing

- aka (Natives)
- on the **`primitive`** data types we dont have any methods like `.toString`
- js behind the scence will wrap the **`primitive`** values to shape of an `object` for example `string` will become `object` `String()`
- when we use methods on **`primitive`s** js will create it for us `obejct` shape no need for us to create `object` shape of **`primitive`** on first place thats bad practice and pre-optimise.
- if you hve an `object` and you want to get the underlying `primitive` value out you can use `valueOf()` method.

## Self

- Unless set elsewhere, the value of `self` is `window`.
- JavaScript lets you access any property `x` of `window` as simply `x`, instead of `window.x`.
- `self` is really `window.self`, which is different to `this`.
  - If you're using a function that is executed in the global scope and is not in strict mode, this defaults to window.
  - If you're using a function in a different context, this will refer to that context, but self will still be `window`.
- in `service worker` senario it is refer to `WorkerGlobalScope.self`

## Coercion

- we have 2 types of coercion in **javascript** **Imlicit** and **Explecit**.
- Implicit
  - coercion happens when we use non `Boolean` data type where it needs a `Boolean` (any value that used in contexts of `Boolean`) like `if` statement, `ternary expression`, second part of `for loop`.
  - when we use `+` operator with `number` and `string` result will be concatenated `string` and `number` side coercie to `ToString` implicitly.
  - when we use `- / * %` operator with `number` and `string` result will be `number` and `string` side coercie to `ToNumber` implicitly.
  - when use non `Boolean` data type in an `if `statement value get coerice To`Boolean` implicitly.
  - `null, unedfiend, '', 0, false, NaN` are `falsy` values, anything else are truty `object`s, `arrays` , `functions` etc.
  - when we use `${}` template literal coercie the value to `string`.
  - `! `will coercise the value to `Boolean` but we have to provide second `!` sign to flip it to the original value.

for non-`primitive` data types set of proccess will going on to coerice them.

- To`primitive` (abstract operation try to reach a `primitive` data type from non-`primitive` recursivly)
  - `ValueOf `
  - `toString`

## == Equlity Operators

- `==` equal sign means **loose equality**
- `===` equal sign means **strict equality**
- michanizm of 2 `==` and `===` are the same for the `primitive` values they check both `value` and `type` but the behavior is diffrent.
- if data types in an equality wasn`t the same `==` equal sign will coercie the value respictivly to the coercison.
- but `===` will not coercie the values and return `false` if types wasn`t the same.
- for non-`primitive` data type just check the **refrence** of pointer beacuse pointers are `string` type `==` and `===` equal doesnt different there. just pointer value test.
- cases that you dont want to use `==` sign beacuse of wired behavior is where either side of comparison can have `true`, `false, [], "", and 0`.

## Functions

- functions are special type of `object`s, they have `call` method on them.
- after function execution done, everythins in that fn get deleted except return value.

## Higher Order Function

- is function that we can pass callback to it, in order to make some part of functionallity reuseable, like a map function that recives a callback and execute it for each element.

## Hoisting

- hoisting is just term and there is nothing such hoist exsist in `javascript`.
- the term`s hoisting come from how **javascript** compile and excecute in 2 phase our code.
- in compile phase **javascript** engine will remember `variables` and `function` declartion.
- in execute phase **js-engine** will know which `variable` and `function` declartion do we have.
- beacuse of that we can access `variables` and `function` declartions before calling them.
- for the `var` keyword just declartion will hoist, for the `functions`, declaration and `function` body will hoist
- this behavior for `let` and `const` `variables` are diffrent they are hoist but not accessible they are in **temporal dead zone**.(TDZ)(accessing `variable` before declaration)

## Scope

- `scope` is term where we defined our values and accessiblity.
- we have 3 scope in **javascript**
  - `global` scope, `variables` define in global scope are accessible in the the same file from any where.
  - `function` scope, `variables` define in `function` plus parameters of `function`.
  - `block` scope using { } via `let` and `const`.
  - err from try catch statement is block scope.
  - scope access is **outer to inner**.
  - **scope chain** is where we define multiple scope level nested each other via `functions` and `{}` with `let` and `const`.
  - `{ }` is not a scope, we can make it a `block scope` using `let` and `const`.
  - lexical scope is author time where we declare `function` and use which `variables` in them, outer or inner remembering of outer `variable` means the lexical scope of that `function`.
  - if we define scope chain engine start to look-up for `variable` from inner to outer to find `variable` until it reaches the global scope the first match will use.
  - in `non-strict-mode` if js cant find a `variable` and reaches to the `global scope`, global scope will create that `variable` on the fly and passed it to `function`.
  - `function` declaritions are belong to the scope where the defined but parameters of a `function` belong to the `function` it self.
  - dynamic scope is about where `function` get invoked and lexical scope is where `function` declared.

## Modules

- `module` is when we hide behavior(`method`) and state(`data`) and limit the access to other parts of code.
- in `ES6` modules add as first-class syntax using `export/import`
- in `ES6` every file is `module`.
- we can create `module` without `ES6` syntax.

## Closure

- `closure` is a term where `function` can remember and access the outer `variables`. (`lexical scope`).
- lexical scope means where you defiend it.
- if you define a `function outer` and a func inside of outer named `function inner` and inside of inner function, you defiend variables, and return the inner function, your passing inner function to global memory space with backpack of defiend variables, so when you want to use returned fn, you have access to those variables by running inner function, even though execution context of outer function is gone.
- we bring the data with us from where function born.
- this behavior is beacuse js is lexical or static scope language, not dynamic scope.
- but just the declaration not values of them.
  > in a simple manner closure means js will remember the variables that you defiend in a function, and pass it as backpack where you use it.
  > we can see backpack in chrome dev tool as `[[scope]]`.

## Execution Context

- when our js program starts it goes through our code line by line top to bottom this behavior name is `executation thread`.
- second thing to do is create a `local memory space` for storing variables that defiend in a function.
  > tip 1 : if you create a array in your fn, your storing it in fn local memory space, and by returning it you store a new variable in global memory space.
  > tip 2 : if you use a variable in your function that not exsist in the same scope, js engine goes up and tries to find it in the parent scope, do it until reaches the global scope, if it couldnt find it in global scope, global scope creates a variable with the same name and assign undifiend to it, then pass it down.
- these 2 behavior togheter are `execution context`
- js will create `global executation context` 1 time for our entire program, and creates a new execution context for every function call.

## Call Stack

- for js to follow up where we are and to know which function is executing right now it creates a call stack.
- our 0 index of call stack is always `global executation context` and on top of that it will store other function calls.

## Async

- time is the most complex factor in your program.
- js is single thread, due to this fact when we want to fetch data from a remote server we use async feature to not block the thread.
- features like: settimeout, fetch, dom, console, all of them are browser features, not the javascript, browser will run this kind of feature with help of `callback queue` and the `event loop`.

#### Promise

> promise create a bridge between `browser` and `js-engine`, to track what happens to your async operation.

- when you set timer with settimeout that will goes to web browser and when call stack is empty thats gone run your callback,but you cant track it, with `promises` that goes to web browser and immidiatly return a place holder object called `promise`, that has 2 callback init `resolve` and `reject`, with promise you can follow up what happend to your async operation.

- a promise has 3 different state initally they are in `pend` state after async operation they will fullfield wether with `rejected` or `resolved`.

#### Callback

- the problem with the callback or callback hell is not about prymid shape of code, it`s about trust issues like not running my callback to many times, or to early.
- error handling in every level.
- race condition.

#### Thunk

- is pattern, a time independent wrapper around a value

#### Event Loop, Task Queue, Microtask Queue, Call Stack

> for maintaining the order and priority of async operation

> priority is always with microtasks if there was no microtask event loop will dequeue from task queue

- there are 2 queues, 1 call stask and 1 event loop.
- event loop job is to check if call stack is empty, dequeue task from queues with the order of first microtask queue and then task queue. and put them on callstack.

> Microtask: Promise callbacks and UI update(reactjs set state): then, catch, finally.
> Task Queue: setTimeout, setInterval, requestAnimationFrame, click events, keyboard events.
