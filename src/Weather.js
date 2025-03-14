import React, { useState } from "react";
import "./Weather.css";



const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [error, setError] = useState(null);


  const fetchWeather = async () => {
    if (!city){
        setError("Please enter a city");
        return;
    } 
    setError(null); 

  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
  
      if (response.ok) {
        setWeather(data);
      } else {
        alert("City not found!");
        setWeather(null);
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Something went wrong!");
    }
  };
  

  return (
    <div  className="weather-container">
      <h2>Weather App</h2>
  
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
  
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p className="error-message">{error}</p>}

  
      {weather && (
        <div className="weather-info">
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
<p>Wind Speed: {weather.wind.speed} m/s</p>
<p>Pressure: {weather.main.pressure} hPa</p>

        </div>
        
      )}
    </div>
  );
  
};

export default Weather;
