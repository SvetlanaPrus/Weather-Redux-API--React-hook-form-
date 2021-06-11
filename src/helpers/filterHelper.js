// filterHelper.js

const filterIsEmpty = (filter) => {
    return filter.minTemp === null
        && filter.maxTemp === null
        && filter.dayType === '';
};

export const filterDays = (days, filter) => {
    const filteredDays = days.filter((day) => {
        // А вдруг фильтр пустой
        if (filterIsEmpty(filter)) {
            return true;
        }
        // Тип погоды
        if (filter.dayType === '' || day.type === filter.dayType) {
            // Температура MIN
            if (filter.minTemp === null || day.temperature >= filter.minTemp) {
                // Температура MAX
                if (filter.maxTemp === null || day.temperature <= filter.maxTemp) {
                    return true;
                }
            }
        }

        return false;
    });

    return filteredDays;
};

