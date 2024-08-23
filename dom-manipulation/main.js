'use strict';
let clickCount = 0;
const hotButton = document.querySelector('.hot-button');
const clickCounter = document.querySelector('.click-count');
if (!hotButton) throw new Error('The $button query failed');
if (!clickCounter) throw new Error('The .click-count query failed');
function handleClick() {
  clickCount++;
  let temp;
  if (clickCount < 4) {
    temp = 'cold';
  } else if (clickCount < 7) {
    temp = 'cool';
  } else if (clickCount < 10) {
    temp = 'tepid';
  } else if (clickCount < 13) {
    temp = 'warm';
  } else if (clickCount < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temp;
  clickCounter.textContent = 'clicks: ' + clickCount;
}
hotButton.addEventListener('click', handleClick);
