import { filterType } from '../types';

export const filterAction = Object.freeze({
    setFilter: (data) => {
        return {
            type:    filterType.SET_FILTER,
            payload: data,
        };
    },
});
