import React,{ useState, useEffect } from 'react';
import WeatherDetails from '../WeatherDetails';

function SearchMain() {
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm, "searchTerm");
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=8f26c3866741132a64df6d1f8b82d5d2`;

            let res = await fetch(url);
            let data = await res.json();
            console.log(data, "data url");
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type="search" placeholder='Enter City...' id='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className='searchButton' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherDetails />
        </>
    )
};

export default SearchMain
