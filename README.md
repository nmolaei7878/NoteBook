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
