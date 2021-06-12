import { filterReducer } from '../reducers';

export const getFilter = (state) => {
    return state.filterReducer.filter;
};
