'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('Failed to find contact form.');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
  const $formElements = $contactForm.elements;
  const formValue = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formValue);
  $contactForm.reset();
});
