- ```.class p#blue``` will select ``paragraph`` elements that have id ``blue`` inside of ``.class`` 

### Selectors
- we have 3 type of selectors `id`, ``class`` and ``tag``.

### Specificity
- `#id` 1-0-0
- `.class` 0-1-0
- `tag` 0-0-1
> priority is from left to right. `` #id > .class > tag``

### Size Units
- `em` is reletive to the parent.
- `rem` is relative to the root.


### CSS Variable

- define ``base.css`` file and `@import 'path/to/base.css'` it in your other style files.
- in `base.css` define ```:root{}``` and define your sahred variables in there like 
- ```--color-primary: #FFF;```
- ```--font-family: "Inter", sans-serif;```

### Descendant Selector
> (child/parent)
- __descendant__ 
- ``div.text > a {}`` this will find every a tag that has parent div and div have class text.

- __direct descendant__ (child/parent)
- ``div.text  a {}`` this will find every a tag in the div that have class of text.

> (followed by not parent/child)
- __ajadcet sibling__
- ``div + a {}`` if a was immidiatly after div.

- __general sibling__
- ``div ~ a {}`` all a tag that are under div.