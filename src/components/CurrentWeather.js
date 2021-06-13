import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { getDay } from '../lib/redux/selectors';

export const CurrentWeather = ({ data, isFetched }) => {
    const selectedDayId = useSelector(getDay);

    const chosenDay =  selectedDayId
        // ? data.find((el) => el.id === selectedDayId) : data?.[ 0 ];
        ? data?.find((el) => el.id === selectedDayId) : data?.find((el, i) => i === 0);


    if (!isFetched && selectedDayId) {
        return 'Загрузка...';
    }

    return (
        <div>
            <div className = 'head'>
                <div className = { `icon ${chosenDay?.type}` }></div>
                <div className = 'current-date'>
                    <p>
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
        </div>
    );
};
