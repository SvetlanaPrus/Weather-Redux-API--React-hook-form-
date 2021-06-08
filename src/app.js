import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Filter, CurrentWeather, ForecastAllDays,
} from './components';
import { useForecast } from './hooks';
import { dayAction } from './lib/redux/actions';


export const App = () => {
    const { data } = useForecast();
    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(data)) {
            dispatch(dayAction.setDay(data?.find((el, i) => i === 0)));
        }
    }, []);

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

