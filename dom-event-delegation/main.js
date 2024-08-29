'use strict';
const taskList = document.querySelector('.task-list');
if (!taskList) throw new Error('the .task-list query failed');
taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('eventTarget: ', eventTarget);
  console.log('tagName ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const taskListItem = eventTarget.closest('.task-list-item');
    console.log('Closest .task-list-item ancestor: ', taskListItem);
    taskListItem?.remove();
    /*I had to chat GPT this lst line for the '?' because I could not figure out what to do about the possibly null error*/
  }
});
