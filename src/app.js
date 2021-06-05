// Components
import React from 'react';
import { Filter } from './components/Filter';
import { Head } from './components/Head';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';

// Instruments

export const App = () => {
    return (
        <div id = 'root'>
            <main>
                <Filter />
                <Head />
                <CurrentWeather />
                <Forecast />
            </main>
        </div>
    );
};

