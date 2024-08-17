# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static
- How does setting `position: relative` on an element affect document flow?
  modifies the position of an element while keeping it within the document flow
- How does setting `position: relative` on an element affect where it appears on the page?
  element occupies space but can be shifted from its normal position using the top, right, bottom, and left properties
- How does setting `position: absolute` on an element affect document flow?
  removes the element from flow, other elements are positioned as if it doesn't exist
- How does setting `position: absolute` on an element affect where it appears on the page?
  positions the element relative to its nearest positioned ancestor
- How do you constrain an absolutely positioned element to a containing block?
  you set a positioning value other than static to the container element - to set the containing block and then you position: absolute to the child element
- What are the four box offset properties?
  top, bottom, left, right

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
