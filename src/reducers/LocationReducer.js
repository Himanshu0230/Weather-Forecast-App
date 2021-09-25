export default (state = null , action) => {
    switch(action.type) {
        case 'save_location':
            return action.payload;
        default:
            return state;
    }
}; 