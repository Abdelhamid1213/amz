let list = document.getElementById('list');

function addTask() {
  var task = document.getElementById("task-input").value;
  document.getElementById("task-input").value = "";
  if (task) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
	var close = document.createElement("button");
    li.innerText = task;
    li.setAttribute("class", "task");
    ul.appendChild(li);
	close.innerText = "X"
	close.setAttribute("class", "close");
	li.appendChild(close);
  }
}

list.addEventListener('click', function(element){
	if (element.target.tagName === "LI"){
		element.target.classList.toggle("done");
	} else if (element.target.tagName === "BUTTON"){
		element.target.parentElement.remove();
	}
});