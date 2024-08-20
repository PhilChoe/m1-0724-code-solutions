# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  for debugging purposes, we want to see how the program/code is working and what it returns
- What is the purpose of events and event handling?
  event handlers are functions that respond to user actions or interactions with a web page. When an event occurs, JS creates an event object that contains info about the event. The event object is passed as an argument to the event handler function.
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener() method
- What is a callback function?
  a function passed into another function as an argument, in the context of event handling, it is used to respond to events triggered by user interactions or other asynchronous actions
- What object is passed into an event listener callback when the event fires?
  an event object; when an event occurs, JS creates an event object that contains info about the event. The event object is passed as an argument to the event handler function.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it is read-only; it is reference to the object onto which the event was dispatched, you can check by console.log the event.target and find more info about it online on MDN
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  first one, handleclick is passed as a reference to the method, it will be executed ONLY when the click event occurs on the element, it is stored as a callback
  bottom one, the handleClick() is called immediately because of the parentheses, the result of the function call is passed to the addEventListener

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
