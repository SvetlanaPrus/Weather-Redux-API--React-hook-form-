import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { getDay } from '../lib/redux/selectors';
import { useForecast } from '../hooks';

export const CurrentWeather = () => {
    const { data, isFetched } = useForecast();
    const selectedDayId = useSelector(getDay);

    const chosenDay =  selectedDayId
        ? data.find((el) => el.id === selectedDayId) : data?.[ 0 ];

    console.log('chosenDay:', chosenDay);

    if (!isFetched && selectedDayId) {
        return 'Загрузка...';
    }

    return (
        <>
            <div className = 'head'>
                <div className = { `icon ${data?.type}` }></div>
                <div className = 'current-date'>
                    <p>
                        { /* { format(chosenDay.day, 'EEEE') } */ }
                        { chosenDay?.day && format(chosenDay?.day, 'EEEE') }
                    </p>
                    <span>
                        { chosenDay?.day && format(chosenDay?.day, 'dd LLLL') }
                    </span>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>
                    { chosenDay?.temperature }
                </p>
                <p className = 'meta'>
                    <span className = 'rainy'>
                        { chosenDay?.rain_probability }
                    </span>
                    <span className = 'humidity'>
                        { chosenDay?.humidity }
                    </span>
                </p>
            </div>
        </>
    );
};
