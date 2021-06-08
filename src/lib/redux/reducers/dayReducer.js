import { dayType } from '../types';

const initialState = {
    day: '',
};


export const dayReducer = (state = initialState, action) => {
    switch (action.type) {
    case dayType.SET_DAY: {
        return {
            ...state,
            day: action.payload,
        };
    }
    default: {
        return state;
    }
    }
};
