////////////////////// REFERENCES ///////////////////

var showButton = document.getElementById("showPlanets");
var clearButton = document.getElementById("clearAll");
var planetHolderDiv = document.getElementById("planetHolder");

/////////////////////// ARRAY ////////////////////////

var planets = [
{
	name: "Mercury",
	url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
},
{
	name: "Venus",
	url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
},
{
	name: "Earth",
	url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
},
{
	name: "Mars",
	url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg"
},
{
	name: "Jupiter",
	url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
},
{
	name: "Saturn",
	url: "http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg"
},
{
	name: "Uranus",
	url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
},
{
	name: "Neptune",
	url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg"
}];

/////////////////////// EVENT LISTENERS /////////////////

showButton.addEventListener("click", populatePage);
clearButton.addEventListener("click", cleanUp);
showButton.addEventListener("mouseenter", populatePage);
clearButton.addEventListener("mouseenter", cleanUp);
document.body.addEventListener("click", showPlanetName);


/////////////////////// FUNCTIONS ///////////////////////

function populatePage() {
	planetHolderDiv.innerHTML = "";
	for (var i = 0; i < planets.length; i++) {
		var newPlanet="";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName hidden"> ${planets[i].name} </div>`;
		newPlanet += `<img class="planetImage" src="${planets[i].url}"`
		newPlanet += `</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
};

function cleanUp() {
	planetHolderDiv.innerHTML = "";
};

function showPlanetName(event){
	if(event.target.className === 'planetImage'){
	event.target.previousSibling.classList.toggle('hidden');
	}
}

