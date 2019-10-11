import React from 'react';
import WeatherExtrainfo from './WeatherExtainfo';
import WeatherTemperature from  './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const WeatherData = () =>(
    <div>
        <WeatherTemperature
            temperature={20}
            weatherState={SUN}
        />
        <WeatherExtrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default WeatherData;