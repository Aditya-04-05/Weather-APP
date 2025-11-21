const API_KEY = "YOUR-API-KEY";

function getWeather() {
  const city = document.getElementById("city").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("result").innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    });
}
