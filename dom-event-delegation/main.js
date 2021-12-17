var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', toDoList);

function toDoList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  var $taskListItem = event.target.closest('.task-list-item');
  if (event.target.tagName === 'BUTTON') {
    console.log('closest .task-list-item:', $taskListItem);
    $taskListItem.remove();
  }
}
