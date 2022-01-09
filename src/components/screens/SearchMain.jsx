import React,{ useState, useEffect } from 'react';
import WeatherDetails from '../WeatherDetails';

function SearchMain() {
    const [searchTerm, setSearchTerm] = useState("");
    const [tempInfo, setTempInfo] = useState({})
    console.log(searchTerm, "searchTerm");
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=8f26c3866741132a64df6d1f8b82d5d2`;

            let res = await fetch(url);
            let data = await res.json();
            const {temp, humidity, pressure} = data.main;
            const {main: weatherType} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weatherType, name, speed, country, sunset,
            };
            setTempInfo(myNewWeatherInfo); 
            // console.log(data, "data url");
            
        } catch (error) {
            console.log(error, "error");
            alert("Enter a valid City Name.")
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className='wrap'>
                <h2 className='title'>Weather Forecast</h2>
                <div className="search">
                    <input type="search" placeholder='Enter City...' id='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className='searchButton' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherDetails {...tempInfo} />
        </>
    )
};

export default SearchMain
