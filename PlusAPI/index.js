let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

function show(response) {
console.log(response);
console.log(response.data.temprature.current);

}

axios.get(apiUrl).then(show);