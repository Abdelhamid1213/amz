const list = document.getElementById('list');
const taskInput = document.getElementById('task-input');

function addTask() {
  const task = taskInput.value.trim();
  taskInput.value = "";
  if (task) {
    const li = document.createElement("li");
    li.innerText = task;
    li.classList.add("task");
    
    const close = document.createElement("button");
    close.innerText = "\u00d7";
    close.classList.add("close");
    
    li.appendChild(close);
    list.appendChild(li);
    
    saveTasks();
    updateClearAllButton();
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

list.addEventListener('click', function (event) {
  const target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("done");
    saveTasks();
  } else if (target.tagName === "BUTTON") {
    target.parentElement.remove();
    saveTasks();
  }

  updateClearAllButton();
});

function clearAllTasks() {
  list.innerHTML = "";
  saveTasks();
  updateClearAllButton();
}

function saveTasks() {
  localStorage.setItem('tasks', list.innerHTML);
}

function fetchTasks() {
  list.innerHTML = localStorage.getItem('tasks') || "";
  updateClearAllButton();
}

function updateClearAllButton() {
  const clearAllBtn = document.getElementById('clear-all-btn');
  clearAllBtn.style.display = list.children.length > 0 ? 'block' : 'none';
}

fetchTasks();
