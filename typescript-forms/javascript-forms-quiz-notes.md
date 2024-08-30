# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?
  focus
- What event is fired when a user's cursor leaves a form control?
  blur
- What event is fired as a user changes the value of a form control?
  input event
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  submit, it allows you to perform validation or other processing before the form data is actually sent
- What does the `event.preventDefault()` method do?
  you prevent the page from refreshing or navigating to the form's action URL
- What does submitting a form without `event.preventDefault()` do?
  by default, when a form is submitted, the page is refreshed or navigated to the form's action URL
- What property of a form element object contains all of the form's controls.
  every <form> element has an elements property that lists all the form controls that are contained within the <form> element. You can access a particular form control element by using the element's name or id attribute, as well as the index that it appears within the HTMLFormControlsCollection
- What property of a form control object gets and sets its value?
  the value property
- What is one risk of writing a lot of code without checking to see if it works so far?
  you will have a harder to finding where you need to debug your code
- What is an advantage of having your console open when writing a JavaScript program?
  you can see how the code interacts and reacts as you save code, you don't have to go back and try to debug after writing 100s of lines of code

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
