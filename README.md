- if you update state based on the pervious update always do it with callback.
- wrap your state fns with another function and passed it to on click, to prevent creating it every time.