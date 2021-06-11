import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';  - doesnt work with it.
import { useDispatch } from 'react-redux';
import { filterAction } from '../../lib/redux/actions';


export const Filter = () => {
    const form = useForm({ mode: 'onSubmit' });
    const dispatch = useDispatch();


    // "Submit button" trigger, in order to change buttons name.
    const [trigger, setTrigger] = useState(false);

    function onSubmit(data) {
        setTrigger(!trigger);
        dispatch(filterAction.setFilter(data));
    }

    useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            form.reset({
                dayType: '',
                minTemp: null,
                maxTemp: null,
            });
        }
    }, [form.formState, form.submittedData, form.reset]);


    return (
        <form className = 'filter' onSubmit = { form.handleSubmit(onSubmit) }>

            <span
                className = { form.watch('dayType') === 'cloudy' ? 'checkbox selected' : 'checkbox' }
                onClick = { () => form.setValue('dayType', 'cloudy', { shouldDirty: true }) }>Облачно</span>


            <span
                className = { form.watch('dayType') === 'sunny' ? 'checkbox selected' : 'checkbox' }
                onClick = { () => form.setValue('dayType', 'sunny', { shouldDirty: true }) }>Солнечно</span>

            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Минимальная температура</label>
                <input
                    id = 'min-temperature' type = 'number'
                    { ...form.register('minTemp') } />
            </p>

            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Максимальная температура</label>
                <input
                    id = 'max-temperature' type = 'number'
                    { ...form.register('maxTemp') } />
            </p>

            <button type = 'submit'>
                { trigger === true ? 'Сбросить' : 'Отфильтровать' }
            </button>

        </form>
    );
};
