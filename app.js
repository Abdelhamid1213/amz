function addTask() {
  var task = document.getElementById("task-input").value;
  document.getElementById("task-input").value = "";
  console.log(task);
  if (task) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.innerText = task;
    li.setAttribute("class", "task");
    ul.appendChild(li);
  }
}
