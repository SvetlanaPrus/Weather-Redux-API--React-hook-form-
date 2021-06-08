import { dayType } from '../types/dayType';
import { useForecast } from '../../../hooks';

export const dayAction = Object.freeze({
    setDay: (id) => {
        const { data } = useForecast();
        const selectedDay = data?.filter((el) => el.id === id);

        return {
            type:    dayType.SET_DAY,
            payload: selectedDay,
        };
    },
});
