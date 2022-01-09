import React from 'react';

function WeatherDetails() {
    return (
        <>
            <article className='widget'>
                <div className='weathericon'>
                    <i className="wi wi-day-sunny"></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>23.99&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            Sunny
                        </div>
                        <div className="place">
                            Mumbai, IN
                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extraTemp">
                    <div className="tempInfoMinMax">
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extraInfoLeftSide">
                                6:30 PM<br />
                                Sunset
                            </p>
                        </div>
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extraInfoLeftSide">
                                644<br />
                                Humidity
                            </p>
                        </div>
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extraInfoLeftSide">
                                321<br />
                                Pressure
                            </p>
                        </div>
                        <div className="twoSidedsecction">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extraInfoLeftSide">
                                123<br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>   
        </>
    )
}

export default WeatherDetails
