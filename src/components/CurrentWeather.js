import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { getDay } from '../lib/redux/selectors';
import { useForecast } from '../hooks';

export const CurrentWeather = () => {
    const { data, isFetched } = useForecast();
    const selectedDayId = useSelector(getDay);

    const chosenDay =  selectedDayId.id !== '' ? data?.find((el, i) => i === 0)
        : data?.find((el) => el.id === selectedDayId.id);

    if (!isFetched && selectedDayId.id !== '') {
        return 'Загрузка...';
    }

    return (
        <>
            <div className = 'head'>
                { /* <div className = { `icon ${data.type}` }></div> */ }
                <div className = 'current-date'>
                    <p> 2222
                        { /* { format(chosenDay.day, 'EEEE') } */ }
                    </p>
                    <span> 555
                        { /* { format(chosenDay.day, 'dd LLLL') } */ }
                    </span>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>88888
                    { /* { chosenDay.temperature } */ }
                </p>
                <p className = 'meta'>
                    <span className = 'rainy'>54545
                        { /* { chosenDay.rain_probability } */ }
                    </span>
                    <span className = 'humidity'>54654
                        { /* { chosenDay.humidity } */ }
                    </span>
                </p>
            </div>
        </>
    );
};
