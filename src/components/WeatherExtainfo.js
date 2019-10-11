import React from 'react';
import PropTypes from 'prop-types';

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

WeatherExtrainfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
};

export default WeatherExtrainfo;