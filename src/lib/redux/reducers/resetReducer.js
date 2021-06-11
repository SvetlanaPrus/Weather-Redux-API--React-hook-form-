import { resetType } from '../types/resetType';

const initialState = {
    dayType: '',
    minTemp: null,
    maxTemp: null,
};

export const resetReducer = (state = initialState, action) => {
    switch (action.type) {
    case resetType.REMOVE_FILTER: {
        return {
            ...state,
            dayType: action.payload.dayType,
            minTemp: action.payload.minTemp,
            maxTemp: action.payload.maxTemp,
        };
    }
    default: {
        return state;
    }
    }
};
