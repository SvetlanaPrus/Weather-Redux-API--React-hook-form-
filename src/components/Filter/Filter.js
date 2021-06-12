import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { filterAction } from '../../lib/redux/actions';


export const Filter = () => {
    const form = useForm({ mode: 'onSubmit' });
    const dispatch = useDispatch();
    // const { setValue, formState: { isDirty } } = useForm();

    // "Submit button" trigger, in order to change buttons name.
    const [trigger, setTrigger] = useState(false);

    function onSubmit(data) {
        setTrigger(!trigger);
        dispatch(filterAction.setFilter(data));
        if (trigger) {
            form.reset({ dayType: '', minTemp: '', maxTemp: '' });
            dispatch(filterAction.setFilter({ dayType: '', minTemp: '', maxTemp: '' }));
        }
    }

    // useEffect(() => {
    //     if (form.formState.isSubmitSuccessful) {
    //         form.reset({
    //             dayType: '',
    //             minTemp: '',
    //             maxTemp: '',
    //         });
    //     }
    // }, [form.formState, form.submittedData, form.reset]);

    const blockClass1 = !trigger ? 'checkbox selected' : 'checkbox selected blocked';
    const blockClass2 = !trigger ? 'checkbox' : 'checkbox blocked';

    return (
        <form className = 'filter' onSubmit = { form.handleSubmit(onSubmit) }>

            <span
                className = { form.watch('dayType') === 'cloudy' ? blockClass1 : blockClass2 }
                onClick = { () => form.setValue('dayType', 'cloudy', { shouldDirty: true }) }>Cloudy</span>


            <span
                className = { form.watch('dayType') === 'sunny' ? blockClass1 : blockClass2 }
                onClick = { () => form.setValue('dayType', 'sunny', { shouldDirty: true }) }>Sunny</span>

            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature' >Min temperature</label>
                <input
                    readOnly = { trigger }
                    id = 'min-temperature' type = 'number'
                    { ...form.register('minTemp') } onClick = { () => true } />

            </p>

            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Max temperature</label>
                <input
                    readOnly = { trigger }
                    id = 'max-temperature' type = 'number'
                    { ...form.register('maxTemp') } onClick = { () => true } />
            </p>

            <button type = 'submit' disabled = { !form.formState.isDirty }>
                { trigger ? 'Reset' : 'Filter' }
            </button>

        </form>
    );
};
