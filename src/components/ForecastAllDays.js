import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { fetchify } from '../helpers';
import { dayAction } from '../lib/redux/actions';
import { getDay } from '../lib/redux/selectors';

export const ForecastAllDays = ({ data, isFetched }) => {
    const dispatch = useDispatch();
    const selectedDayId = useSelector(getDay);

    const setSelectedDayId = (id) => {
        dispatch(dayAction.setDay(id));
    };

    const listOfDays = isFetched && data.slice(0, 7)
        .map((el) => {
            return (
                <div
                    key = { el.id } className = { el.id === selectedDayId ? `day ${el.type} selected` : `day ${el.type}` }
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
