import React from 'react';
import WeatherExtrainfo from './WeatherExtainfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css';

const Index = () =>(
    <div className={"weatherDataCont"}>
        <WeatherTemperature
            temperature={20}
            weatherState={CLOUD}
        />
        <WeatherExtrainfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default Index;