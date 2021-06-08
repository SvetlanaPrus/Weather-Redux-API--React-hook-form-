import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { getDay } from '../lib/redux/selectors/daySelector';

export const CurrentWeather = () => {
    const { data } = useSelector(getDay);

    return (
        <>
            <div className = 'head'>
                { /* <div className = { `icon ${selectedDay.type}` }></div> */ }
                <div className = 'current-date'>
                    <p>{ format(data.day, 'EEEE') }</p>
                    <span>{ format(data.day, 'dd LLLL') }</span>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>{ data.temperature }</p>
                <p className = 'meta'>
                    <span className = 'rainy'>{ data.rain_probability }</span>
                    <span className = 'humidity'>{ data.humidity }</span>
                </p>
            </div>
        </>
    );
};
