// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");

// Initialize the main project folder
app.use(express.static("website"));

const port = 3000;

// Setup Server

const server = app.listen(port, listening);
function listening() {
	console.log(`running server on port: ${port}`);
}

// Getting the routes and projectdata
app.get("/all", (request, response) => {
	response.send(projectData);
});

function sendData(request, response) {
	response.send(projectData);
}

// next step add Post data for weather

app.post("/addWeatherData", addData);

function addData(request, response) {
	projectData.temperature = request.body.temperature;
	projectData.date = request.body.date;
	projectData.user_response = request.body.user_response;
	response.end();
	console.log(projectData);
}
