

## Types

- we have 2 category of data types in __javascript__ which are ``````primitive`````` type and ```refrence``` type.
- ```string, number, ```Boolean```, null, undifiend, symbol``` and ```bigInt``` as __```primitive```__ types they are accessbile via __value__.
- __```primitive```__ types are store in __stack memory__.
- ```object```, ```function```, ```array``` are __refrence__ type.
- __refrence__ types are accessible via __pointers__ from __stack memory__ and actual value get store in __heap memory__.

## Boxing 
  - aka (Natives)
  - on the __```primitive```__ data types we dont have any methods like ```.toString```
  - js behind the scence will wrap the __```primitive```__ values to shape of an ``````object`````` for example ```string``` will become ```object``` ```String()```
  - when we use methods on __```primitive```s__ js will create it for us ```obejct``` shape no need for us to create ```object``` shape of __```primitive```__ on first place thats bad practice and pre-optimise.
  - if you hve an ``````object`````` and you want to get the underlying ```primitive``` value out you can use ```valueOf()``` method.

## Self
- Unless set elsewhere, the value of `self` is `window`.
- JavaScript lets you access any property `x` of `window` as simply `x`, instead of `window.x`.
- `self` is really `window.self`, which is different to `this`.
  - If you're using a function that is executed in the global scope and is not in strict mode, this defaults to window.
  - If you're using a function in a different context, this will refer to that context, but self will still be `window`.
- in `service worker` senario it is refer to `WorkerGlobalScope.self`
## Coercion

- we have 2 types of coercion in __javascript__ __Imlicit__ and __Explecit__.
- Implicit
  - coercion happens when we use non ```Boolean``` data type where it needs a ```Boolean``` (any value that used in contexts of ```Boolean```) like ```if``` statement, ```ternary expression```, second part of ```for loop```.
  - when we use ```+``` operator with ```number``` and ```string``` result will be concatenated ```string``` and ```number``` side coercie to ```ToString``` implicitly.
  - when we use ```- / * %``` operator with ```number``` and ```string``` result will be ```number``` and ```string``` side coercie to ```ToNumber``` implicitly.
  - when use non ```Boolean``` data type in an ```if ```statement value get coerice To```Boolean``` implicitly.
  - ```null, unedfiend, '', 0, false, NaN``` are ```falsy``` values, anything else are truty ```object```s, ```arrays``` , ```functions``` etc.
  - when we use `${}` template literal coercie the value to ```string```.
  - ```! ```will coercise the value to ```Boolean``` but we have to provide second ```!``` sign to flip it to the original value.  

for non-```primitive``` data types set of proccess will going on to coerice them.
  - To```primitive``` (abstract operation try to reach a ```primitive``` data type from non-```primitive``` recursivly)
    - ```ValueOf ```
    - ```toString```

## == Equlity Operators
  - ```==``` equal sign means __loose equality__
  - ```===``` equal sign means __strict equality__
  - michanizm of 2 ``==`` and ```===``` are the same for the ```primitive``` values they check both ```value``` and ```type``` but the behavior is diffrent.
  - if data types in an equality wasn`t the same ```==``` equal sign will coercie the value respictivly to the coercison.
  - but ```===``` will not coercie the values and return ```false``` if types wasn`t the same.
  - for non-```primitive``` data type just check the __refrence__ of pointer beacuse pointers are ```string``` type ```==``` and ```===``` equal doesnt different there. just pointer value test.
  - cases that you dont want to use ```==``` sign beacuse of wired behavior is where either side of comparison can have ```true```, ```false, [], "", and 0```. 

## Functions
 - functions are special type of ```object```s, they have ```call``` method on them.


## Hoisting
  - hoisting is just term and there is nothing such hoist exsist in ```javascript```.
  - the term`s hoisting come from how __javascript__ compile and excecute in 2 phase our code.
  - in compile phase __javascript__ engine will remember ```variables``` and ```function``` declartion.
  - in execute phase __js-engine__ will know which ```variable``` and ```function``` declartion do we have.
  - beacuse of that we can access ```variables``` and ```function``` declartions before calling them.
  - for the ```var``` keyword just declartion will hoist, for the ```functions```, declaration and ```function``` body will hoist
  - this behavior for ```let``` and ```const``` ```variables``` are diffrent they are hoist but not accessible they are in __temporal dead zone__.(TDZ)(accessing ``````variable`````` before declaration)

## Scope
 - ```scope``` is term where we defined our values and accessiblity.
 - we have 3 scope in __javascript__
     - ```global``` scope, ```variables``` define in global scope are accessible in the the same file from any where.
     - ```function``` scope, ```variables``` define in ```````function``````` plus parameters of ```````function```````.
     - ```block``` scope using { } via ````let```` and ```const```.
   - err from try catch statement is block scope.
   - scope access is __outer to inner__.
   - __scope chain__ is where we define multiple scope level nested each other via ```functions``` and ```{}``` with ```let``` and ```const```.
   - ```{ }``` is not a scope, we can make it a ```block scope``` using ```let``` and ```const```.
   - lexical scope is author time where we declare ```function``` and use which ```variables``` in them, outer or inner remembering of outer ```variable``` means the lexical scope of that ```function```.
   - if we define scope chain engine start to look-up for ```variable``` from inner to outer to find ```variable``` until it reaches the global scope the first match will use.
   - in ```non-strict-mode``` if js cant find a ```variable``` and reaches to the ```global scope```, global scope will create that ```variable``` on the fly and passed it to ```````function```````.
   - ````function```` declaritions are belong to the scope where the defined but parameters of a ````function```` belong to the ````function```` it self.
   - dynamic scope is about where ````function```` get invoked and lexical scope is where ````function```` declared.

## Modules
  - ```module``` is when we hide behavior(```method```) and state(```data```) and limit the access to other parts of code.
  - in ```ES6``` modules add as first-class syntax using ```export/import``` 
  - in ```ES6``` every file is ```module```.
  - we can create ```module``` without ````ES6```` syntax.
    
## Closure
  - ```closure``` is a term where ```````function``````` can remember and access the outer ```variables```. (```lexical scope```).
  - but just the declaration not values of them.












 
