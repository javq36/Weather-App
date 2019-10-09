import React from 'react';
import WeatherExtrainfo from './WeatherExtainfo';
import WeatherTemperature from  './WeatherTemperature';

const WeatherData = () =>(
    <div>
        <WeatherTemperature/>
        <WeatherExtrainfo/>
    </div>
);

export default WeatherData;