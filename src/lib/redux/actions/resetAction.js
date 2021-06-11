import { resetType } from '../types/resetType';

export const resetAction = Object.freeze({
    removeFilter: () => {
        return {
            type:    resetType.REMOVE_FILTER,
            payload: {
                dayType: '',
                minTemp: null,
                maxTemp: null,
            },
        };
    },
});
