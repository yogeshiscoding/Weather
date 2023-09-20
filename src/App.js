import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchWeather } from "./codefile.js";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Weatherdata />
    </div>
  );
}

function Searchbar() {
  const [city, setCity] = useState(""); // Create a state variable for the city input

  const handleInputChange = (e) => {
    setCity(e.target.value); // Update the state with the input value
  };

  const handleSearchClick = () => {
    fetchWeather(city); // Call the fetchWeather function with the city
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        className="city"
        placeholder="Enter city"
        value={city} // Set the input value to the state variable
        onChange={handleInputChange} // Handle input change
      ></input>
      <button onClick={handleSearchClick} className="Submit" id="submit">
        Search
      </button>
    </div>
  );
}

function Weatherdata() {
  return (
    <div className="maindata" id="maindata">
      <div className="weatherdata" id="weatherdata">
        <h1 className="temp">Loading...</h1>
        <h2 className="weathercity">Loading...</h2>
      </div>

      <div className="otherdetails">
        <div className="humiditycon">
          <h3 className="humidity">Humidity</h3>
          <h2 className="humiditydata">Loading...</h2>
        </div>
        <div className="windcon">
          <h3 className="wind">Wind Speed</h3>
          <h2 className="winddata">Loading...</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
