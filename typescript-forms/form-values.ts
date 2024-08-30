interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

if (!$contactForm) throw new Error('Failed to find contact form.');

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  console.log('Form submitted');

  const $formElements = $contactForm.elements as FormElements;

  const formValue = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formValue);

  $contactForm.reset();
});
