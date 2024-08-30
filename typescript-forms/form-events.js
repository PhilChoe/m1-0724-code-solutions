'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blue event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(`Name: ${eventTarget.name}, Value: ${eventTarget.value}`);
}
const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');
if (!$name) throw new Error('Failed to find the name input element');
if (!$email) throw new Error('Failed to find the email input element');
if (!$message) throw new Error('Failed to find the message textarea element');
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
