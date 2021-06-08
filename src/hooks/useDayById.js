import { useQuery } from 'react-query';
import { api } from '../api';

// not used anywhere yet
export const useDayById = (id) => {
    return useQuery(['forecast', id], () => api.getDayById(id));
};
