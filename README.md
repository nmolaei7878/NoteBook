# Parsing CSS
- confilct resolve happens in parsing.
- when we define ```%``` for an element, in parsing phase that will turns into ``px``. beacuse `50%` in __mobile__ is diffrent from __desktop__.

#### CasCade

- processing diffrent rules that apply to an element, 
- rules coming from: 
  - developer (what you define for element).
  - browser (link elements come with blue color and underline).
  - user (when define font size in it`s browser)


### Pesudo Class
- use to styling like ```.btn:hover```




- ```active``` happen when you click.
- ```.btn:hover::after``` with this, we will add after when button is hover.
- ```::after``` or ```::before``` pesodu element is to add content after or before an element.