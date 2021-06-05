import React from 'react';

export const CurrentWeather = () => {
    return (
        <div className = 'current-weather'>
            <p className = 'temperature'>20</p>
            <p className = 'meta'>
                <span className = 'rainy'>%46</span>
                <span className = 'humidity'>%56</span>
            </p>
        </div>
    );
};
