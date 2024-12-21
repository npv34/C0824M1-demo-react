import {useEffect, useState} from "react";
import axios from "axios";

function Weather() {
    const [data, setData] = useState({
        id: "",
        temp: 0,
        weather: 0,
        city: "Hanoi",
        iconUrl: ""
    });

    useEffect(() => {
        callApiGetWeather("Hanoi")
    }, [])

    const callApiGetWeather= (cityName) => {
        axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: cityName,
                appid: "02e3323f29bc461c2346db2fe3989729",
            }
            // .then xu ly api tra ve thanh cong
        }).then(response => {
            let data = response.data;
            let main = data.main;
            let weather = data.weather[0].main;
            let icon = data.weather[0].icon;
            setData({
                id: data.id,
                temp: main.temp - 273,
                weather: weather,
                city: data.name,
                iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`
            })
            // .catch xu ly api tra ve loi
        }).catch(err => {
            console.error(err);
        })
    }

    const handleGetWeatherCityName = (e) => {
        let cityName = e.target.value;
        callApiGetWeather(cityName)
    }

    return (
        <>
            Select city:
            <select onChange={(e) => handleGetWeatherCityName(e)}>
                <option value="Hanoi">Hanoi</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Da Nang">Da Nang</option>
                <option value="Ho Chi Minh">Ho Chi Minh</option>
            </select>
            <h1>City: {data.city}</h1>
            <img src={data.iconUrl} alt=""/>
            <h2>Weather: {data.weather}</h2>
            <p>Current temperature: {data.temp} C</p>
        </>
    )
}

export default Weather;