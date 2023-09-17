
### General
- __CSS Config__

- ```css 
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 62.5;```
> please check out `style.css`. 


# Parsing CSS
- confilct resolve happens in parsing.
- when we define ```%``` for an element, in parsing phase >that will turns into ``px``. beacuse `50%` in __mobile__ is diffrent from __desktop__.

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

### Display

> we can change default behavior of HTML dispaly:

- inline: Displays an element as an inline element (like <span>). Any height and width properties will have no effect.
- block:	Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width.
- inline-block: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values