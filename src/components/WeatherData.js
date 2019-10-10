import React from 'react';
import WeatherExtrainfo from './WeatherExtainfo';
import WeatherTemperature from  './WeatherTemperature';

const WeatherData = () =>(
    <div>
        <WeatherTemperature
            temperature={20}
            weatherState={''}
        />
        <WeatherExtrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default WeatherData;