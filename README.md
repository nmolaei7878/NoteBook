# Vanila-JS & Dom Maniupulation

- Dom and HTML file are not exactly the same.
- you can write html files without head and body.(DOM will inject them on the fly for you).
- when DOM see the first visible content in html file it start with body and your html to the DOM.
- you can see your DOM in browser element tab.
- you can see your HTML file in viewSource tab.
- there are multiple ways to get a single html elements in js like getElementById, getElementByClassName, querySelector(will return the first matching element). all of these functions will return a null if could`nt find an element.
- there are ways to get multiple elements at once getElementsById, getElementsByClassName, querySelectorAll, these function will return an empty array if could`nt find any elements.
- querySelectorAll have modern Es6 functions like map, reduce, filter, we can achive these modern fn for others as well by wrapping them with Array.from().
- we have access to html attribute and style from js with 'element.(attribute name)' and 'element.style.(attribute name)'.
- UI update will happen after releasing the thread.
- we have CRUD operation on elements.

- script tag
  - defer keyword will download the file and defer the excution after html parsed.
  - async keyword will download the file but execute it when its ready after download.


 - there is an event called 'DOMContentLoaded' on window object that
 will make sure DOM is ready to manipulation and it just called after DOM sctructure created in memory.(this is happening before paint anything)(before use see anything)

 - there is another event called 'load' and that will called after loading all images, stylesheets, fonts.

- we can access event with 'addEventListener' and calling event name on element like 'myElement.onclick'
  - if you have multiple 'click' events on an element using 'addEventListener' all of them will execute.
  - but wih 'myElement.onclick' events last one will execute. beacuse we are overwritnig it.


- events will recive a third argument called option.
  - we can pass an object as an option
    
    - once: default is false, it will called eventListener once and remove eventListener from element.
    
    - passive: we tell to JS Engine do what you want(layoting, painting), we dont update the DOM, example is when user scrolling, and browser showing contents.

- we can write our own events and disptach it from any where,(pub/sub) like useContext in ReactJS.(make sure dispatching event on 1 el and you can listen to it on same el).

- we can use Proxy to reactive programming.

- we can use webcomponent to render diffrent html
  - using template html tag to dynamic html
  - create class that extends HTMLElement
  - encapsulate our class using shadow DOM
  - you have to import your webcomponents some where in import chain.

- we can create our SPA routing with help of history and location api and popstate event. 