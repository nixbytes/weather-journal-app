/* Global Variables */

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '' 

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Eventlistener to add function for the dom element
document.getElementById('generate').addEventListener('click',runEvent);

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
