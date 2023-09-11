## DOM & Vanila JS
- __Tip 1 :__ Dom and HTML file are not exactly the same.
- __Tip 2 :__  you can write html files without head and body.(DOM will inject them on the fly for you at start).

- __Tip 3 :__ you can see your DOM in browser element tab and your HTML file in viewSource tab.
- __Tip 4 :__ there are multiple ways to get a single html elements in js like ```getElementById```, ```getElementsByClassName```,  ```querySelector``` (will return the first matching element). all of these functions will return a null if could`nt find an element.
- __Tip 5 :__ there are ways to get multiple elements at once, ```getElementsByClassName```, ```querySelectorAll```, these function will return an empty array if could`nt find any elements.
- __Tip 6 :__ ```querySelectorAll``` have modern ES6 functions like ```map,reduce,filter```, we can achive these modern fn for others as well by wrapping them with ```Array.from()```.
- __Tip 7 :__ we have access to html attribute and style from js with '``element.(attribute name)``' and '```element.style.(attribute name)```'.
- __Tip 8 :__ UI update will happen after releasing the thread.(when call stack is empty).
- __Tip 9 :__ Script tag in Html :
  - ```defer``` keyword will download the file and defer the excution after html parsed.
  - ```async``` keyword will download the file but execute it when its ready after download.
  - in case of using both ``` async defer ``` ,__async__ has priority, on the older browser that don`t support __async__ , __defer__ is fallback for __async__.
   ---
- __Tip 10 :__ there is an event called ```'DOMContentLoaded'``` on window object that
 will make sure DOM is ready to manipulation and it just called after DOM sctructure created in memory.(this is happening before paint anything)(before user see anything)
  - there is another event called ```'load'``` and that will called after loading all images, stylesheets, fonts.
---
- __Tip 11 :__  we can access events with '```addEventListener```' and calling event name on element like ```myElement.onclick = ()=>{}```
  - if you have multiple ```'click'``` events on an element using ```'addEventListener'``` all of them will execute.
  - but wih ```'myElement.onclick'``` events last one will execute. beacuse we are overwritnig it.


- events will recive a third argument called option.
  - we can pass an ```object``` as an option
    
    - ```once```: default is set to false, it will called eventListener once and remove eventListener from element.
    
    - ```passive```: we tell to JS Engine do what you want(layoting, painting), we don`t update the DOM, example is when user scrolling, and browser showing contents(layouting, painting).

- __Tip 12 :__ we can write our own ```Event``` and ```disptach``` it from any where,(pub/sub) like useContext in ReactJS.(make sure dispatching event on 1 element and  listen to that on the same element)(like window object).
---
## Proxy
- __Tip  :__ we can use ```Proxy``` for data binding, validation and reactive programming.
- example ic src.
---
## Router
- __Tip  :__ we can create our SPA routing with help of ```history``` and ```location``` Api and ```'popstate'``` event. 
---
## Web Component

- web component is resuable html element with custom behavior that needs :
  - ```templte element```: html declartion that will not parsed until we cloned it.
  - create ```custom element``` that extends ```HTMLElement```
  - encapsulate our styling and functionality using ```shadow DOM```
  - you have to ```import``` your web components some where in import chain.

