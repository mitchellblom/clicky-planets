// calls a function, and adds any string i want to the div, using innerHTML

var showButton = document.getElementById("showPlanets");
// var clearButton = document.getElementById("clearAll");
var planetHolderDiv = document.getElementById("planetHolder");

var planets = [
{
	name: "Mercury",
	url: ""
},
{
	name: "Venus",
	url: ""
},
{
	name: "Earth",
	url: ""
},
{
	name: "Mars",
	url: ""
},
{
	name: "Jupiter",
	url: ""
},
{
	name: "Saturn",
	url: ""
},
{
	name: "Uranus",
	url: ""
},
{
	name: "Neptune",
	url: ""
}];

showButton.addEventListener("click", populatePage);
// clearButton.addEventListener("click", cleanUp);

function populatePage() {
	planetHolderDiv.innerHTML = "";
	for (var i = 0; i < planets.length; i++) {
		var newPlanet="";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName"> ${planets[i].name} </div>`;
		newPlanet += `</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
};

function cleanUp() {
	planetHolderDiv.innerHTML = "";
};