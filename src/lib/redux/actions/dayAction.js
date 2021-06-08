import { dayType } from '../types';

export const dayAction = Object.freeze({
    setDay: (id) => {
        return {
            type:    dayType.SET_DAY,
            payload: id,
        };
    },
});
