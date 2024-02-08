document.addEventListener('DOMContentLoaded', function() {
  fetchWeatherData();
});

function fetchWeatherData() {
  const apiUrl = 'https://sgbzwmdf00.execute-api.us-east-1.amazonaws.com/prod/forecast';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
  const weatherDiv = document.getElementById('weather');

  // Clear any previous content
  weatherDiv.innerHTML = '';

  // Check if the current weather data is available
  if(data.current) {
    const currentWeather = data.current;
    let content = '<h2>Current Weather</h2>';
    content += `<p>Time: ${currentWeather.time}</p>`;
    content += `<p>Temperature: ${currentWeather.temperature_2m}°F</p>`;
    content += `<p>Rain: ${currentWeather.rain} inches</p>`;

    // Update the weatherDiv with the new content
    weatherDiv.innerHTML = content;
  } else {
    // If no data is available, display a message
    weatherDiv.innerHTML = '<p>Weather data is not available at the moment.</p>';
  }
}
