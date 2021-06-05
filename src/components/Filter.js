import React from 'react';

export const Filter = () => {
    return (
        <div className = 'filter'>
            <span className = 'checkbox'>Облачно</span>
            <span className = 'checkbox'>Солнечно</span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Минимальная температура</label>
                <input
                    id = 'min-temperature' type = 'number'
                    value = '' />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Максимальная температура</label>
                <input
                    id = 'max-temperature' type = 'number'
                    value = '' />
            </p>
            <button disabled = ''>Отфильтровать</button>
        </div>
    );
};
