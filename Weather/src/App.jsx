import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [Error, setError] = useState("");
  const[loading , setLoading] = useState(false);

  const apiKey = "476ecdd21eddf345975e37b86912f0bd";

  const handleSearch = (e) => {
    if (city.trim() !==  "" ) {
         search(city);
         setError("");     
    }
    else{
      setError("Enter a city")
       setWeatherData({})
    }
    
  };

  const search = async (city) => {
     if(!city){
      setError("Enter a city");
      setLoading(false)
      return ;
     }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` );

        if(!response.ok){
          setError(Error.toString());

        }
      // console.log(response);
      const data = await response.json();

      console.log("data", data);
      setLoading(true)
      setWeatherData({
        id : data.id,
        temp: (data.main.temp - 273.15).toFixed(2),
        wind: data.wind.speed,       
        humidity: data.main.humidity,
        city: data.name ,
        description:data.weather[0].description,
        icon: data.weather[0].icon
      })
      //  clear the input..
      setCity("")
      setLoading(false)
    } catch (error) {
      console.log(error.toString());
      setError(error.toString());
    }
  };

  useEffect(() => {
    // console.log("component is rendered");
    search("lahore");
  }, []);

  
  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Get Weather
        </button>
      </div>
      {Error && <p className="error-message">{Error}</p>}
      <div className="weather-display">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          weatherData  &&  weatherData &&(
            <div className="weather-card">
              <h1 className="weather-city">City: {weatherData.city}</h1>
              <p className="weather-humidity">Humidity: {weatherData.humidity}%</p>
              <p className="weather-temp">Temperature: {weatherData.temp} °C</p>
              <p className="weather-wind">Wind: {weatherData.wind} m/s</p>
              <p className="weather-description">
                Description: {weatherData.description}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="Weather Icon"
                className="weather-icon"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
