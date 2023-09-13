
# General

- __Test runner__: is tool that will run the __test__ code, execute and display result.
- __assertion library__: to define expected outcome, check that expection met.
- __AAA Pattern__ :
  - Arrange: define testing environment & values.
  - Act: run the function that should be test.
  - Assert: compare output value with your expectations.
- You should and can test for errors.
- Just test your code, not the backend api, or other third party libraries.
- Get rid of side effects with ```mocks``` and ```spies```.
- Writing test for a function that will run other functions or a function in side it self commonly called ```integration test```, because the value of those functions are matter for the current function.


## Vitest
- ```'vitest --globals'``` is to use functions like ```to()``` or ```expect()``` without importing them.
- vitest support inline testing.
- you can define your test files both with ```.spec``` or ```.test``` .
- you can see more detail about test with ```'--reporter verbose'``` flag.
- run your test once with ```'--run'``` flag.
- enter watch mode with just ```'vitest'``` flag.
```toEqual()``` will make a deep comparison (check properties and values),
```toBe()``` will just make a shallow comparison (check for pointer refrence)

- ```test()``` provide ```done()``` parameter to you and you can use it in your callbacks, ```test()``` by it self don`t execute your code in callback,when you are add ```done()``` at the end, that will execute.

- ```async``` code test
  - ```expect()``` support ```promise``` out of the box. you can call ```rejects``` or ```resolves``` on the ```expect()```
  -  you can define your test with ```async await```.
---
- ```import``` either ```default``` or ```named``` when your mocking, just use pattern that you use in your actuall code file.

- change test env with ```'--environment jsdom'``` flag to test __DOM__.

- Hooks: used to setup a global data in your test suite
```beforeEach(), beforeAll(), afterEach(), afterAll() ```.
- add concurrency to your test with `test.concurrent()` and ```describe.concurrent()``` to run tests in parallel.



# DOM
- to test DOM we have to load ```index.html``` file using ```path``` and ```fs``` modules.
- ```node js``` modules are always available. 
- test DOM easier with ```Testing Library```.

## Spies

- wrapper around a function to mock it, if and how it execute.```vi.fn()```
- check a spy funtion called with which args using .```tobeCalledWith()```
- pass a ```() => {}``` to the spy function for your custom implementation.

## Mocks

- create a mocked version of an api using mock.
```vi.mock('an api to mock')```
- pass a ```module``` name or ``path`` to the mock.

- if you dont pass any option as second arg to the ``vi.mock()`` auto mocking algorithm of vitest will find all of the functions of module and replace them with empty spie functions.
- mocked module or api just work in where you write it and not on the other files.

- you can create mocked version of module or third party  library ``globaly`` using folder at root of your project with name ```__mocks__``` 
containing a file that with same name module or third party you want to mock. like ``fs.js`` in that file you can implement your mocked version.

- override mock implementation with ``mockImplementation()`` function also `mockImplementationOnce()`.


- mock a global function with `stubGlobal('fetch',()=>{})`, like `fetch()` function.

- you can pass `()=>{}` to the `vi.mock`, and if you want to implement a specific function by your own you have to return ```object {}```, 

- import statement is also matter if you import that module or third party library in your actual code file with `default import` then in an object that your passing to the mock you hve create `default:{}` and inside that default object write your mock implementation of fn.