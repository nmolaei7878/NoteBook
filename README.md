
### Display : 
- we can change default behavior of HTML dispaly with display property:

  - inline: Displays an element as an inline element, Any height and width properties will have no effect.

  - block: Displays an element as a block element, It starts on a new line, and takes up the whole width.

  - inline-block: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values





### Position :
> normal document flow means where you define it.
> __RTLB__ : right, top, left, bottom.

- `static `: default value, where you defined it, __RTLB__ don't work.
- `relative `: where you defined it, __RTLB__ works here.
- `absolute `: out of where you defined it, __RTLB__ works here. Positioned to nearest - - - Relative parent. 
- `fixed `: out of where you define it, __RTLB__ works here, Positioned to viewport and stay with viewport, also seen after scroll.
- `sticky `: where you defined it, __RTLB__ works here, Positioned to viewport, not stay with viewport, remove after scrolling.




### Measuring
- Font: 
  - `%` : x% * parent font.
  - `em` : exactly like `%`.

- Length: 
  - `%` : x% * parent length.
  - `em` : using current element font size.

- `REM `: x * root font size. Both font size and length.
- `VH `: 10vh is 10% of current viewport height.
- `VW `: 10vw is 10% of current viewport width.

- `min-height `: stay with your given size if content is smaller than that to fit you`r given size, fit your content if content goes beyond from your given size. 





### Box-Sizing : 
- __Normal box sizing__: ``content + padding + border``. (On each side)
When we pass height or width to an element we are not including padding or border size.

- __Border box__: box size is our given size including padding and border.
When we pass height or width to an element we are said the whole box size should be our value including padding or border size.



### Specificity : 
  - `inline style` 

  - `#id` 1-0-0

  - `.class` 0-1-0

  - `tag` 0-0-1

> Inlined Style > Id > class > tag.
> Selector `*` has no specificity





### Parsing :
- confilct resolve happens in parsing.

- when we define `%` for an element, in parsing phase that will turns into `px`. beacuse `50%` in mobile is diffrent from desktop.



### Cascade :

> Is processing diffrent rules that apply to an element,

- rules coming from:

  - __developer__ (what you define for element).

  - __browser__ (link elements come with blue color and underline).

  - __user__ (when define font size in it`s browser)






### Pseudo-Class
- use to styling like ``.btn:hover``

- `:active` happen when you click.

- ``.btn:hover::after`` with this, we will add after when button is hover.

- ``::after`` or ``::before`` pesodu element is to add content after or before an element. __In document flow__


### Selectors : 
- ``.class p#blue`` will select paragraph elements that have id blue inside of `.class`
- we have 3 type of selectors __id, class and tag__.
child/parent

##### descendant

- `div.text > a {}` this will find every a tag that has parent div and that div have class text.

- direct descendant (child/parent)

- `div.text a {}` this will find every a tag in the div that have class of text.

(followed by not parent/child)
 not tree structure 

#####  ajadcent sibling

- `div + a {}` if a was immidiatly after div.
- If there was 2 a element after div, it will apply the rule just to the first one.

#####  general sibling

- `div ~ a {}` all a tag that are under div.



### BEM
- naming style for css classes: `__box-something`

### Media-Query
- `@max-width`: viewport less than.
- `@min-width`: viewport greater than.


### General config 
- define `base.css` file and `@import 'path/to/base.css'` it in your other style files.

- in `base.css` define `:root{}` and define your sahred variables in there like

- `--color-primary: #FFF`;

- `--font-family: "Inter", sans-serif`;

Then import it in your style files.

```css
:root { 
 --primary-color: #FFF
}
body {
padding: 0
}
```
use color in other files like: ` var(--primary-color)`



### SASS 
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

#### @import

- `@import ` in pure __css__ will result in a http-request.
- `@import ` in __sass__ they will goes into 1 main file.

- if you define your sass file like `_filename.scss` it`s partial, you can import it into another files.

- if you define your sass file without `_` at begining of your file name, they will end up into they`r own css files.


#### variables

- start with `$` sign.
- you can define `local variables` in `{}`.
- define `global variables` out of `{}` and use it any where.


#### string interpolation

- `#{}` this is syntax
- `#{hue(green)}` is passing a function to string interpolation result in string value


#### mixin

- for re-use of style.
 ```css
@mixin somename {
 'define your styles here'
}
.otherclass {
  @include somemixin
}
```

- you can define your mixin with default arguments like
```css
@mixin mixinname($opacity: 0.5){
opacity: $opacity
}
.someclass {
@include mixinname()
or
@include mixinname(0.8)
}
```

- pass a declartion block like

```css
@mixin mixinname($color){
color: $color
  .inner{
    @content
  }
}
.someclass {
@include mixinname(#cf9){
  color: red
}
}
```



### if statement

 ```css
@if something > somethingelse {
    'your styles goes here'
}
```