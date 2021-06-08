import { combineReducers } from 'redux';
import { dayReducer as day } from '../reducers/dayReducer';

export const rootReducer = combineReducers({
    // tmp: () => ({ day }),
    day,
});
