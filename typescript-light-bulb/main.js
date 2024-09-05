'use strict';
const $lightBulb = document.getElementById('lightbulb');
const $body = document.body;
if ($lightBulb) {
  $lightBulb.addEventListener('click', () => {
    if ($body.classList.contains('light-on')) {
      $body.classList.remove('light-on');
      $body.classList.add('light-off');
    } else {
      $body.classList.remove('light-off');
      $body.classList.add('light-on');
    }
    // Toggle the lightbulb's 'on' state
    $lightBulb.classList.toggle('on');
  });
}
