export default (state = null , action) => {
    switch(action.type) {
        case 'save_forecast':
            return action.payload;
        default:
            return state;
    }
};