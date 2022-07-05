/* Global Variables */

const urlLink = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = ''

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Eventlistener to add function for the dom element
document.getElementById('generate').addEventListener('click', runEvent);

function runEvent() {
	// get data from user
	const getZip = document.getElementById('zip').value;
	const content = document.getElementById('feelings').value;
	getWeather(urlLink, getZip, apiKey);

}

/* Function to call and get Web API Data*/
const getWeather = async (urlLink, getZip, apiKey) => {
	// response from api fetch data 
	const response = await fetch(urlLink + getZip + apiKey);
	try {
		// try fetch json from api call
		const jsonData = await response.json();
		return jsonData;
	} catch (error) {
		// check for error
		console.log("error", error);
	}
}


// Function to POST data from the lessons
async function postData(url = "", data = {}) {
	console.log(data);
	const response = await fetch(url, {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		// Body data type must match "Content-Type" header
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
		console.log(newData);
		return newData;
	} catch (error) {
		console.log("error", error);
	}
}

postData("/add", { answer: 42 });
