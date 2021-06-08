import React from 'react';
import { format } from  'date-fns';

export const ForecastOneDay = ({ el }) => {
    return (
        <>
            <p>{ format(el.day, 'EEEE') }</p>
            <span>{ el.temperature }</span>
        </>
    );
};
