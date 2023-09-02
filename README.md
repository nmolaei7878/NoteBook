# JS-Document

## Types

- we have 2 category of data types in javascript which are primitive type and refrence type.
- string, number, boolean, null, undifiend, symbol and bigInt as primitive types they are accessbile via value.
- primitive types are store in stack memory.
- object, function, array are refrence type.
- refrence types are accessible via pointers from stack memory and actual value get store in heap memory.

## Boxing 
  - aka (Natives)
  - on the primitive data types we dont have any methods like .toString
  - js behind the scence will wrap the primitive value to shape of an object for example string will become object String()
  - when we use methods on primitives js will create it for us obejct shape no need for us to create object shape of primitive on first place thats bad practice and pre-optimise.
  - if you hve an object and you want to get the underlying primitive value out you can use valueOf() method.

## Coercion

- we have 2 types of coercion in javascript Imlicit and Explecit.
- Implicit
  - coercion happens when we use non boolean data type where it needs a boolean (any value that used in contexts of boolean) like if statement, ternary expression, second part of for loop.
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

## == Equlity Operators
  - == equal sign means loose equality
  - === equal sign means strict equality
  - michanizm of 2 == and === are the same for the primitive values they check both value and type but the behavior is diffrent.
  - if data types in an equality wasnt the same == equal sign will coercie the value respictivly to the coercison.
  - but === will not coercie the values and return false if types wasnt same.
  - for no-primitive data type just check the refrence of pointer beacuse pointers are string type == and === equal doesnt different there. just pointer value test.
  - cases that you dont want to use == sign beacuse of wired behavior is where either side of comparison can have true, false, [], "", and 0. 

## Functions
 - functions are special type of objects, they have call method on them.















 
