import React from 'react';

const WeatherExtrainfo = ({humidity, wind}) =>(
    <div>
        <span>
            {`${humidity}% de humedad -`}
        </span>
        <span>
            {`${wind} de viento`}
        </span>
    </div>
);

export default WeatherExtrainfo;