# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  it is a debugging tool, it is where the browser prints errors and warnings as they occur in your JS code
- What is a "model"?
  a structured blueprint of the web document
- Which "document" is being referred to in the phrase Document Object Model?
  the web document that is loaded into a web browser, HTML typically
- What is the word "object" referring to in the phrase Document Object Model?
  refers the structured representation of the elements within a web document as objects (objects contain data and methods that can be manipulated)
- What is a DOM Tree?
  referencing the tree-like structure of HTML elements, each element is represented as a node in the DOM tree
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector) returns the first element that matches a specified CSS selector
  getElementById(id) returns the element that matches it's ID
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector) returns a NodeLIST of all elements in the document that match a specified CSS selector
- Why might you want to assign the return value of a DOM query to a variable?
  you want to store DOM element references in a variable so accessing the element again does not require another search through the entire HTML
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  you want to make sure the entire DOM is fully loaded and accessible when the script runs
- What does `document.querySelector()` take as its argument and what does it return?
  it takes the CSS selector as an argument (tag name, class name, or ID); it returns the first Element object within the document that matches the specified selector
- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes a single argument, a string representing a CSS selector; it returns a NodeList containing all elements in the document hat match the specified selector

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
