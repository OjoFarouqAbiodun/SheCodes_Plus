let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

function show(response) {
console.log(response);
console.log(response.data);
console.log(response.data.temperature.current);
let h1 = document.querySelector("#h1");
let city = response.data.city;
let temperature = Math.round(response.data.temperature.current);
h1.innerHTML = `It is ${temperature} degrees in ${city}`;
}

axios.get(apiUrl).then(show);