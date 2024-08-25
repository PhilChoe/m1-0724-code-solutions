# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  a native web component used to create pop-up dialogs or modal windows on a webpage, it provides a simple way to create a dialog box or a modal without the need for JS libraries or frameworks
- How do you display a modal dialog?
  using the showModal()

/const $dialog = document.querySelector('dialog');
$dialog.showModal();/

- How do you hide a modal dialog?
  using close()
- What is the difference between the `showModal` & `show` methods?
  show method displays the dialog where it is in the normal flow of the document, and does not have a modal backdrop to block interaction with the rest of the page

whereas, showModal displays the dialog box as a modal, which is one that block interaction with the rest of the page, it is displayed on top of the page with a backdrop, and it's centered on the screen

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
