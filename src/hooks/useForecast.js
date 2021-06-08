import { useQuery } from 'react-query';
import { api } from '../api';

export const useForecast = () => {
    return useQuery('forecast', api.getWeather);
};
