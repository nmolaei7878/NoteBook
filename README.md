# JS-Document

## Types

- we have 2 category of data types in javascript which are primitive type and refrence type.
- string, number, boolean, null, undifiend, symbol and bigInt as primitive types they are accessbile via value.
- primitive types are store in stack memory.
- object, function, array are refrence type.
- refrence types are accessible via pointers from stack memory and actual value get store in heap memory.

## Boxing
  - on the primitive data types we dont have any methods like .toString
  - js behind the scence will wrap the primitive value to shape of an object for example string will become object String()
  - when we use methods on primitives js will create it for us obejct shape no need for us to create object shape of primitive on first place thats bad practice and pre-optimise.

## Coercion

- we have 2 types of coercion in javascript Imlicit and Explecit.
- Implicit
  - coercion happens when we use non boolean data type where it needs a boolean like if statement, second part of for loop.
  - when we use + operator with number and string result will be concatenated string and number side coercie to ToString implicitly.
  - when we use - / * % operator with number and string result will be number and string side coercie to ToNumber implicitly.
  - when use non boolean data type in an if statement value get coerice ToBoolean implicitly.
  - null, unedfiend, '', 0, false, NaN are falsy values, anything else are truty objects, arrays, functions ....
  - when we use `${}` template literal coercie the value to string.
  - ! will coercise the value to boolean but we have to provide second ! sign to flip it to the original value.  

for non-primitive data types set of proccess will going on to coerice them.
  - ToPrimitive (abstract operation try to reach a primitive data type from non-primitive recrsivly)
    - ValueOf 
    - toString 
