// Zet elke task in de DOM
const addTasksToDom = tasks => {
	tasks.forEach(task => {
		const li = document.createElement("li");
		const liTask = `${task.description}`;
		const textnode = document.createTextNode(liTask);

		var removeTask = document.createElement("img");
		removeTask.setAttribute("src", "bin-red-full-icon.bmp");

		removeTask.addEventListener("click", function() {
			li.parentNode.removeChild(li);
		});
		li.appendChild(removeTask);
		li.appendChild(textnode);
		document.getElementById("listtodo").appendChild(li);
	});
};
addTasksToDom();

const addNewTodoEventHandler = () => {
	document.querySelector(".buttonToDo").addEventListener("click", e => {
		e.preventDefault;
		const inPutfield = document.getElementById("textbox");
		const newTask = { description: inPutfield.value, done: false };
		postTasks(newTask);
		console.log(newTask);
	});
};
addNewTodoEventHandler();

//Haal de data op van de getTasks functie en voer deze aan de addToDom
const loadApplication = async function() {
	const tasks = await getTasks();
	addTasksToDom(tasks);
};
loadApplication();
