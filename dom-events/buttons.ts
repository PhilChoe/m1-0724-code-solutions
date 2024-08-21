const $button = document.querySelector('.click-button');
if (!$button) throw new Error('$Button does not exist');
function handleClick(event: any): void {
  console.log('button clicked');
  console.log(event);
  console.log('event target', event.target);
}

$button.addEventListener('click', handleClick);

const $hover = document.querySelector('.hover-button');
if (!$hover) throw new Error('$hover does not exist');
function handleMouseOver(event: any): void {
  console.log('button hovered');
  console.log(event);
  console.log('event target', event.target);
}

$hover.addEventListener('mouseover', handleMouseOver);

const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event: any): void {
  console.log('button double-clicked');
  console.log(event);
  console.log('event target', event.target);
}

$doubleClick.addEventListener('dblclick', handleDoubleClick);
