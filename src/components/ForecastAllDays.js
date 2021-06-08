import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForecast } from '../hooks';
import { ForecastOneDay } from './ForecastOneDay';
import { fetchify } from '../helpers';
// import { getDay } from '../lib/redux/selectors/daySelector';
import { dayAction } from '../lib/redux/actions/dayAction';


export const ForecastAllDays = () => {
    const { data, isFetched } = useForecast();

    const dispatch = useDispatch();

    const setSelectedDayId = (id) => {
        dispatch(dayAction.setDay(id));
    };

    const listOfDays = data
        .slice(0, 7)
        .map((el) => (
            <ForecastOneDay
                key = { el.id }
                className = { `day ${el.type}` }
                el = { el }
                handleClick = { () => setSelectedDayId(el.id) } />));

    return (
        <div className = 'forecast'>
            { fetchify(isFetched, listOfDays) }
        </div>
    );
};
