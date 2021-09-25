import { create } from "apisauce";
 
const instance =  create({ baseURL: 'https://api.openweathermap.org'});

export default instance;