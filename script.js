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
  // Assuming you have an HTML element with id="weather" to display the data
  const weatherDiv = document.getElementById('weather');
  const hourlyData = data.hourly;
  let content = '<h2>Hourly Weather</h2>';

  // Loop through hourly data and create list items for each time point
  hourlyData.time.forEach((time, index) => {
    content += `<p>Time: ${time}, Temperature: ${hourlyData.temperature_2m[index]}°C</p>`;
  });

  // Update the weatherDiv with the new content
  weatherDiv.innerHTML = content;
}
