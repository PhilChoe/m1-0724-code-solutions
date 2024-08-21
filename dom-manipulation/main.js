'use strict';
let $count = 0;
const $button = document.querySelector('.hot-button');
let $click = document.querySelector('.click-count');
if (!$button) throw new Error('The $button query failed');
function handleClick(event) {
  $count++;
  if (!$button || !$click) {
    throw new Error('The $button or $click query failed');
  }
  $click.textContent = `Click Count: ${$count}`;
  if ($count < 4) {
    $button.className = 'cold';
  } else if ($count < 7) {
    $button.className = 'cool';
  } else if ($count < 10) {
    $button.className = 'tepid';
  } else if ($count < 13) {
    $button.className = 'warm';
  } else if ($count < 16) {
    $button.className = 'hot';
  } else {
    $button.className = 'nuclear';
  }
}
$button.addEventListener('click', handleClick);
