export default (state = null , action) => {
    switch(action.type) {
        case 'save_currentWeather':
            return action.payload;
        default:
            return state;
    }
};