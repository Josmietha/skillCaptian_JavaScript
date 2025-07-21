const API_KEY = 'b46bf978bef47a30f0491f6af426f2c7'; 
const imageMap = {
  Clear: "clear.jpg",
  Clouds: "clouds.jpg",
  Rain: "rain.jpg",
  Snow: "snow.jpg",
  Thunderstorm: "thunderstorm.jpg",
  Drizzle: "drizzle.jpg",
  Mist: "mist.jpg",
  Haze: "haze.jpg",
};

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = `<p style="color: red;">Please enter a city name.</p>`;
    return;
  }

  resultDiv.innerHTML = 'Fetching weather...';

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error('City not found or network error');

    const data = await res.json();
    const weather = data.weather[0];
    const main = data.main;
    const wind = data.wind;

    const condition = weather.main;
    const imageFile = imageMap[condition] || "clouds.jpg";
    const imagePath = `images/${imageFile}`;

    resultDiv.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${imagePath}" alt="${condition}" class="weather-image" />
      <p><strong>🌡️ Temp:</strong> ${main.temp} °C</p>
      <p><strong>☁️ Weather:</strong> ${weather.description}</p>
      <p><strong>💧 Humidity:</strong> ${main.humidity}%</p>
      <p><strong>💨 Wind:</strong> ${wind.speed} m/s</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color: red;">${err.message}</p>`;
  }
}