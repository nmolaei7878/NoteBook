
### Display : 
- we can change default behavior of HTML dispaly with display property:

  - inline: Displays an element as an inline element (like ). Any height and width properties will have no effect.

  - block: Displays an element as a block element (like

). It starts on a new line, and takes up the whole width.

  - inline-block: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values





### Position :
> normal document flow means where you define it.
> RTLB : right, top, left, bottom.

- Static: default value, where you defined it, RTLB don't work.
- Relative: where you defined it, RTLB works here.
- Absolute: out of where you defined it, RTLB works here. Positioned to nearest - - - Relative parent. 
- Fixed: out of where you define it, RTLB works here, Positioned to viewport and stay with viewport, also seen after scroll.
- Sticky: where you defined it, RTLB works here, Positioned to viewport, not stay with viewport, remove after scrolling.








### Measuring
- Font: 
  - % : x% * parent font.
  - em : exactly like %.

- Length: 
  - %: x% * parent length.
  - em : using current element font size.

- REM: x * root font size. Both font size and length.
- VH: 10vh is 10% of current viewport height.
- VW: 10vw is 10% of current viewport width.







### Box-Sizing : 
- Normal box sizing: content + padding + border. (On each side)
When we pass height or width to an element we are not including padding or border size.

- Border box: just content without padding and border.
When we pass height or width to an element we are said the hole box size should be our value including padding or border size.














### Specificity : 
  - inline style 

  - #id 1-0-0

  - .class 0-1-0

  - tag 0-0-1

> Inlined Style > Id > class > tag.
> Selector * has no specificity





### Parsing :
- confilct resolve happens in parsing.

- when we define % for an element, in parsing phase >that will turns into px. beacuse 50% in mobile is diffrent from desktop.



### Cascade :

> Is processing diffrent rules that apply to an element,

- rules coming from:

  - developer (what you define for element).

  - browser (link elements come with blue color and underline).

  - user (when define font size in it`s browser)






### Pseudo-Class
- use to styling like .btn:hover

- active happen when you click.

- .btn:hover::after with this, we will add after when button is hover.

- ::after or ::before pesodu element is to add content after or before an element. In document flow


### Selectors : 
- .class p#blue will select paragraph elements that have id blue inside of .class
- we have 3 type of selectors id, class and tag.
child/parent)

##### descendant

- div.text > a {} this will find every a tag that has parent div and that div have class text.

- direct descendant (child/parent)

- div.text a {} this will find every a tag in the div that have class of text.

(followed by not parent/child)
 not tree structure 

#####  ajadcent sibling

- div + a {} if a was immidiatly after div.
- If ther was 2 a element after div, it will apply the rule just to the first one.

#####  general sibling

- div ~ a {} all a tag that are under div.



### BEM
- naming style for css classes: __box-something

### Media-Query
- @max-width: viewport less than.
- @min-width: viewport greater than.


### General  config 
- define base.css file and @import 'path/to/base.css' it in your other style files.

- in base.css define :root{} and define your sahred variables in there like

- --color-primary: #FFF;

- --font-family: "Inter", sans-serif;
@Import: 
- Define base.css file and add your css variables , and general config in there.
Then import it in your style files.

:root { 
 --primary-color: #FFF
}

body {
padding: 0
}

use color in other files like:  var(--primary-color)









### SASS & LESS
- sass architecture: 
Base/
Component/
Layout/
Pages/
Themes/
Abstract/
Vendors/

> 7 different folder for partial sass files.
> 1 main file to import all of them.

