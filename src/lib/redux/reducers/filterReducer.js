import { filterType } from '../types';

const initialState = {
    dayType: '',
    minTemp: null,
    maxTemp: null,
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
    case filterType.SET_FILTER: {
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
