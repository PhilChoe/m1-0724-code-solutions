# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the property of the event object that refers to the DOM element that triggered the event, gives you a reference to the element that the event occurred on
- What is the effect of setting an element to `display: none`?
  it allows you to hide elements completely from view and the document's layout
- What does the `element.matches()` method take as an argument and what does it return?
  takes a CSS selector as the argument, and returns a boolean value
- How can you retrieve the value of an element's attribute?
  using the getAttribute() method, if exists, it returns its value as a string, if not, as 'null'
- At what steps of the solution would it be helpful to log things to the console?
  basically at any step that your code is executing a meaningful step - adding class/attribute manipulators (event listeners)
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  you would have to add event listeners directly to each tab button
  /_const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  const view1 = document.getElementById('view1');
  const view2 = document.getElementById('view2');_/
  followed by an if statement
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  you need to get Element individually, add event listeners, and basically explicitly handle each view individually

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
