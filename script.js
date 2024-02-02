#document.getElementById('findHikeBtn').addEventListener('click', function() #{
    #Code to handle the find hike action });
// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function fetchWeatherData() {
    const apiUrl = 'https://your-api-gateway-url'; // Replace with your API Gateway URL
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
    const weatherDiv = document.getElementById('weather');
    // Assuming data contains a 'current' object with 'temperature_2m' and 'wind_speed_10m'
    const currentWeather = data.current;
    weatherDiv.innerHTML = `
        <p>Temperature: ${currentWeather.temperature_2m}°C</p>
        <p>Wind Speed: ${currentWeather.wind_speed_10m} m/s</p>
    `;
}
