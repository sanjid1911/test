const apiKey = 'a42ebab1d20ff68eae306f434fff28de'; // Replace with your OpenWeatherMap API key
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data); // Debug: Check the data in the console

        if (data.cod === '404') {
            document.getElementById('weatherData').innerHTML = `<p>City not found. Please try again.</p>`;
            return;
        }

        const weatherHTML = `
            <h2>Weather in ${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weatherData').innerHTML = weatherHTML;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherData').innerHTML = `<p>There was an error retrieving the weather data. Please try again later.</p>`;
    }
}

