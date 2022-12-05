import { useEffect, useState } from "react";
import './Weather.css'
import key from "../key.json"


function Weather() {
    const [weatherData, setWeatherData] = useState();
    const [country, setCountry] = useState("berlin");

    console.log(weatherData);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key.APIkey}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                setWeatherData(data);

            });
    }, [country]);

    if (weatherData === undefined) {
        return;
    }

    return (
        <div className="divWeather">
            <div className="chooseCountry">
                <button onClick={() => setCountry("Düsseldorf")}>Düsseldorf</button>
                <button onClick={() => setCountry("Köln")}>Köln</button>
                <button onClick={() => setCountry("Berlin")}>Berlin</button>
                <button onClick={() => setCountry("Hamburg")}>Hamburg</button>

            </div>
            <div className="outputDates">
                <p>{weatherData.name}</p>
                <p>{weatherData.weather.description} in {weatherData.name}</p>
                <img alt="" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                <p>{weatherData.main.temp}°C</p>
                <p>{weatherData.wind.speed} meter/sec</p>
            </div>
        </div >
    );
};

export default Weather;