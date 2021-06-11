import * as yup from 'yup';

export const filterSchema = yup.object().shape({
    dayType: yup.string(),
    minTemp: yup.number(),
    maxTemp: yup.number(),
});
