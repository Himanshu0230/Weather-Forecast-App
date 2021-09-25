export const saveLocation = (position) => {
    return {
        type: 'save_location',
        payload: position
    };
};

export const saveCurrentWeather = (data) => {
    return{
        type: 'save_currentWeather',
        payload: data
    };
};

export const saveForecast = (data) => {
    return{
        type: 'save_forecast',
        payload: data
    };
};
