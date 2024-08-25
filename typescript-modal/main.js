'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal) throw new Error('the .open-modal query failed');
if (!$dismissModal) throw new Error('the .dismiss-modal query failed');
if (!$dialog) throw new Error('the dialog query failed');
$openModal.addEventListener('click', (event) => {
  $dialog.showModal();
});
$dismissModal.addEventListener('click', (event) => {
  $dialog.close();
});
