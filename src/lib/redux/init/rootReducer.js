import { combineReducers } from 'redux';
import { dayReducer, filterReducer, resetReducer } from '../reducers';

export const rootReducer = combineReducers({
    dayReducer, filterReducer, resetReducer,
});
