# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  yes, it creates a new element with the specified tag name, but it does not add it to the DOM tree until you use the document.appendChild() method to link it up to an existing element in the DOM tree
- How do you add an element as a child to another element?
  appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  it will take 2 arguments, first being a string of the attribute you are trying to create or update (class, id, type, etc.) and 2nd is the value you would like to assign to that attribute
- What steps do you need to take in order to insert a new element into the page?
  use the document.createElement(), to create a new element with the specified tag name, followed by setting the needed attribute, and concluded by adding the new element as a child of an existing element in the DOM tree
- What is the `textContent` property of an element object for?
  it is used to get or set the text content of an element. It represents all the text within an element, including text inside any of its child elements, but it excludes any HTML tags
- Name two ways to set the `class` attribute of a DOM element.
  className property, setAttribute property
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability and readability (simplifies and organizes the code, helping to understand, maintain and debug)

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
