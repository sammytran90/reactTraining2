import axios from 'axios';

const APIKEY = 'a2b79b18feaac19b1c7134f32fa9020e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city_code) {
    const url = ROOT_URL.replace(/\?id=(\d+)\&/gi, city_code);
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}