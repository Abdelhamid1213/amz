document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
	var task = document.getElementById("task-input").value;
	document.getElementById("task-input").value = '';
	console.log(task);
	if (task) {
		var ul = document.getElementById("list");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(task));
		li.setAttribute("id", "task");
		ul.appendChild(li);
	}
	
}