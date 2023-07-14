let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false,
      createdAt: new Date()
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const pendingTasksList = document.getElementById('pendingTasks');
  const completedTasksList = document.getElementById('completedTasks');

  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    if (task.completed) {
      listItem.classList.add('completed');
      completedTasksList.appendChild(listItem);
    } else {
      const completeButton = createTaskActionButton('Complete', () => markTaskAsComplete(index));
      const deleteButton = createTaskActionButton('Delete', () => deleteTask(index));

      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
      pendingTasksList.appendChild(listItem);
    }
  });
}

function markTaskAsComplete(index) {
  tasks[index].completed = true;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function createTaskActionButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

renderTasks();
