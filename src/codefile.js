const apikey = ""; // Enter your api key here ---- I am not giving my api key because on a public github repository my api key might be revoked
const api = "https://api.openweathermap.org/data/2.5/weather?q=";

export async function fetchWeather(city) {
  try {
    const response = await fetch(api + city + `&appid=${apikey}&units=metric`);
    const data = await response.json();
    console.log(data);

    // Update the DOM with weather data here
    document.querySelector(".winddata").innerHTML = data.wind.speed + " KM/H";
    document.querySelector(".humiditydata").innerHTML = data.main.humidity;
    document.querySelector(".temp").innerHTML =
      data.main.temp + `(${data.weather[0].main})`;
    document.querySelector(".weathercity").innerHTML = data.name;
    document.querySelector(".maindata").classList.add("checked");
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
