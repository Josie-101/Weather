let now = new Date();
now.getDay();
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[now.getDay()];
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  let formattedDate = `${currentDay}, ${currentHours}:${currentMinutes}`;

  return formattedDate;
}
console.log(formatDate(now));

let currentTime = document.querySelector("li#now");
currentTime.innerHTML = formatDate(now);

function showTemperature(response) {
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let temperature = document.querySelector("#currentTemp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#current-weather");
  description.innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  searchCity(city);
}

let searchFormclick = document.querySelector("#submit-button");
searchFormclick.addEventListener("click", handleSubmit);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
