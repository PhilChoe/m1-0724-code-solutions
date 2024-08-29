const taskList = document.querySelector('.task-list');

if (!taskList) throw new Error('the .task-list query failed');

taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;

  console.log('eventTarget: ', eventTarget);
  console.log('tagName ', eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const taskListItem = eventTarget.closest('.task-list-item');

    console.log('Closest .task-list-item ancestor: ', taskListItem);

    taskListItem?.remove();
    /* if (taskListItem != null) (taskListItem.remove();} */
  }
});
