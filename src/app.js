// Components
import React from 'react';
import {
    Filter, CurrentWeather, ForecastAllDays,
} from './components';


export const App = () => {
    return (
        <div id = 'root'>
            <main>
                <Filter />
                <CurrentWeather />
                <ForecastAllDays />
            </main>

        </div>
    );
};

