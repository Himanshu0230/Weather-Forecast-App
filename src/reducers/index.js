import { combineReducers } from "redux";
import LocationReducer from "./LocationReducer";
import CurrentWeatherReducer from "./CurrentWeatherReducer";
import ForecastReducer from "./ForecastReducer";

export default combineReducers({
    location: LocationReducer,
    currentWeather: CurrentWeatherReducer,
    forecast : ForecastReducer,
});