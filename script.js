function fetchWeatherData() {
    const apiUrl = 'https://sgbzwmdf00.execute-api.us-east-1.amazonaws.com/prod/forecast'; // Replace with your API Gateway URL
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
    // Add more data as needed
}

// Call the function to fetch and display weather data when the script loads.
fetchWeatherData();
