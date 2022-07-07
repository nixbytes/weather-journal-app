/* Global Variables */

const urlLink = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "a48ef7fa25c67bf261db66882eb6116f";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();

// Eventlistener to add function for the dom element
document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
	// get data from user
	const getZip = document.getElementById("zip").value;
	const content = document.getElementById("feelings").value;
	getWeather(urlLink, getZip, apiKey)
		.then(function (data) {
			postData("/addWeatherData", {
				temp: data.main.temp,
				date: newDate,
				user_response: content,
			});
		})
		.then(function () {
			updateUI();
		});
}

// Async Fetch with Web APIs
const getWeather = async (urlLink, getZip, apiKey) => {
	// response from api fetch data
	const response = await fetch(
		urlLink + getZip + "&appid=" + apiKey + "&units=imperial"
	);
	try {
		// try fetch json from api call
		const jsonData = await response.json();
		return jsonData;
	} catch (error) {
		// check for error
		console.log("error", error);
	}
};

// Function to POST data
const postData = async (url = "", data = {}) => {
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
		return newData;
	} catch (error) {
		console.log("error", error);
	}
};

// Dynamic UI Updates
const updateUI = async () => {
	const request = await fetch("/all");
	try {
		const allData = await request.json();
		document.getElementById("date").innerHTML = allData.date;
		document.getElementById("temp").innerHTML = allData.temp;
		document.getElementById("content").innerHTML =
			allData.user_response;
	} catch (error) {
		console.log("error", error);
	}
};

//helper function to convert temperature from Kelvin to Celsius
function convertTemp(kelvin) {
	const result =
		kelvin < 0 ? "below zero)" : (kelvin - 273.15).toFixed(1);
	return result;
}
