import React, { useState, useEffect } from 'react';

function WeatherDetails(
    {temp, humidity, pressure, weatherType, name, speed, country, sunset,}
) {
    const [ weatherState, setWeatherState ] = useState("");
    const now = new Date()
    const dateString = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`; 

    useEffect(() => {
        if (weatherType) {
            switch (weatherType) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                case "Rain":
                    setWeatherState("wi-day-rain");
                    break;
                case "Smoke":
                    setWeatherState("wi-smoke");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherType])

    return (
        <>
            <article className='widget'>
                <div className='weathericon'>
                    {weatherState ? 
                    <i className={`wi ${weatherState}`}></i>:
                    <i className={`wi wi-day-sunny`}></i>
                }
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        {temp ? 
                            <span>{temp}&deg;</span> :
                            <span>0&deg;</span>}
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weatherType ? 
                            <h2>{weatherType}</h2> :
                            <h2> - </h2>}
                        </div>
                        <div className="place">
                            {name ? 
                            <h6>{name}, {country}</h6> : 
                            <h6></h6>}
                        </div>
                    </div>
                    <div className="date">{dateString} <br /> {time}</div>
                </div>
                <div className="extraTemp">
                    <div className="tempInfoMinMax">
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            {timeStr !== "NaN:NaN" ? 
                            <p className="extraInfoLeftSide">
                            {timeStr} PM<br />
                            Sunset
                        </p>:
                        <p className="extraInfoLeftSide">
                        00:00 <br />
                        Sunset
                    </p>}
                            
                        </div>
                    </div>
                    <div className="tempInfoMinMax">
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            {humidity ? 
                            <p className="extraInfoLeftSide">
                            {humidity}<br />
                            Humidity
                        </p>:
                        <p className="extraInfoLeftSide">
                        0<br />
                        Humidity
                    </p>}
                        </div>
                    </div>
                    <div className="tempInfoMinMax">
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            {pressure ? 
                            <p className="extraInfoLeftSide">
                            {pressure}<br />
                            Pressure
                        </p>:
                        <p className="extraInfoLeftSide">
                        0<br />
                        Pressure
                    </p>}
                        </div>
                    </div>
                    <div className="tempInfoMinMax">
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            {speed ? 
                            <p className="extraInfoLeftSide">
                                {speed}<br />
                                Speed
                            </p>:
                            <p className="extraInfoLeftSide">
                                0<br />
                                Speed
                            </p>}
                        </div>
                    </div>
                </div>
            </article>   
        </>
    )
}

export default WeatherDetails
