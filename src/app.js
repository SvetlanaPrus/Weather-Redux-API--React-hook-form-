import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Filter, CurrentWeather, ForecastAllDays,
} from './components';
import { useForecast } from './hooks';
import { dayAction } from './lib/redux/actions';
import { getFilter } from './lib/redux/selectors';


export const App = () => {
    const { data, isFetched } = useForecast();
    const dispatch = useDispatch();
    const filterVal = useSelector(getFilter);


    console.log(data);
    useEffect(() => {
        if (Array.isArray(data)) {
            dispatch(dayAction.setDay(data?.[ 0 ].id));
        }
    }, []);

    let res = isFetched ? data : [];
    console.log(res);
    console.log('F', filterVal);
    if (filterVal.dayType !== '') {
        res = res.filter((el) => el.type === filterVal.dayType);
    }
    console.log('1', res);
    if (filterVal.minTemp !== '' && res?.length) {
        res = res.filter((el) => el.temperature >= Number(filterVal.minTemp));
    }
    console.log('2', res);
    if (filterVal.maxTemp !== '' && res?.length) {
        res = res.filter((el) => el.temperature <= Number(filterVal.maxTemp));
    }
    if (res?.length) dispatch(dayAction.setDay(res?.[ 0 ].id));
    else {
        dispatch(dayAction.setDay(''));
    }

    return (
        <div id = 'root'>
            <main>
                <Filter />
                { res?.length
                && <div>
                    <CurrentWeather data = { res } isFetched = { isFetched } />
                    <ForecastAllDays data = { res } isFetched = { isFetched } />
                </div>
                }
                { !res?.length
                && <div className = 'forecast'>
                    <p className = 'message'>Search criteria are no available days!</p>
                </div>
                }
            </main>

        </div>
    );
};

