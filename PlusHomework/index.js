let now = new Date();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Satuday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentInfo = document.querySelector(".info");

if (currentMinute < 10) {
	currentMinute = `0${currentMinute}`;
}

if (currentHour < 10) {
	currentHour = `0${currentHour}`;
}

currentInfo.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	let searchInput = document.querySelector(".search-input");
	let city = document.querySelector(".current-city");
	city.innerHTML = `${searchInput.value}`;
});
// Alternatively
// let searchForm = document.querySelector("#search-form");

// function searchSubmitted(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector(".search-input");
//   let city = document.querySelector(".current-city");
//   city.innerHTML = searchInput.value;
// }
// searchForm.addEventListener("submit", searchSubmitted);
