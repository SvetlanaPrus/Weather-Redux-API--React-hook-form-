import { dayType } from '../types/dayType';

const initialState = {
    id:               '',
    completed:        true,
    rain_probability: 0,
    humidity:         0,
    day:              0,
    temperature:      0,
    type:             '',
};


export const dayReducer = (state = initialState, action) => {
    switch (action.type) {
    case dayType.SET_DAY: {
        return {
            state: action.payload,
        };
    }
    default: {
        return state;
    }
    }
};
