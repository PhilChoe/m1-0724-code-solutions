'use strict';
const $tabCont = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if ($tabCont) {
  $tabCont.addEventListener('click', (event) => {
    const $eventTarget = event.target;
    if ($eventTarget.matches('.tab')) {
      $tab.forEach((tab) => {
        if (tab === $eventTarget) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
      const targetView = $eventTarget.getAttribute('data-view');
      $view.forEach((view) => {
        if (view.getAttribute('data-view') === targetView) {
          view.classList.remove('hidden');
        } else {
          view.classList.add('hidden');
        }
      });
      $tab.forEach((tab) => {
        if (tab === $eventTarget) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }
  });
}
