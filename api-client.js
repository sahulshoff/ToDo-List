const URL = "https://wincacademydatabase.firebaseio.com/sven/tasks.json";

const getTasks = async function() {
	try {
		//Haal data van API
		const resultFromAPI = await fetch(URL, { method: "GET" });
		//Zet opgehaalde data om naar JSON
		const jsonData = await resultFromAPI.json();
		//
		//Pakt JSONdata en zet de key om naar id
		let tasks = Object.keys(jsonData).map(key => ({
			id: key,
			description: jsonData[key].description,
			done: jsonData[key].done
		}));
		return tasks;
	} catch (err) {
		console.log(err);
	}
};

const postTasks = async function() {
	const body = JSON.stringify(task);
	try {
		await fetch(URL, { method: "POST", body: body });
	} catch (err) {
		console.log(err, "error");
	}
};

const delTasks = async function() {};
