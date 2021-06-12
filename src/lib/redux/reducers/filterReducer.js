import { filterType } from '../types';

const initialState = {
    filter: {
        dayType: '',
        minTemp: '',
        maxTemp: '',
    },
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
    case filterType.SET_FILTER: {
        return {
            ...state,
            filter: action.payload,
        };
    }
    default: {
        return state;
    }
    }
};
