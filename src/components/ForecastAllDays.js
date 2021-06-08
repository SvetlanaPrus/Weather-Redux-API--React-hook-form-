import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useForecast } from '../hooks';
import { fetchify } from '../helpers';
// import { getDay } from '../lib/redux/selectors/daySelector';
import { dayAction } from '../lib/redux/actions';

export const ForecastAllDays = () => {
    const { data, isFetched } = useForecast();
    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(data)) {
            // dispatch(setChosenDays(days));
            dispatch(dayAction.setDay(data?.[ 0 ].id));
        }
    },  [data]);


    const setSelectedDayId = (id) => {
        dispatch(dayAction.setDay(id));
    };

    const listOfDays = isFetched && data
        .slice(0, 7)
        .map((el) => {
            return (
                <div
                    key = { el.id } className = { `day ${el.type}` }
                    onClick = { () => setSelectedDayId(el.id) }>
                    <p>{ format(el.day, 'EEEE') }</p>
                    <span>{ el.temperature }</span>
                </div>);
        });

    return (
        <div className = 'forecast'>
            { fetchify(isFetched, listOfDays) }
        </div>
    );
};
