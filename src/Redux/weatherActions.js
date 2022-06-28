import { RECEIVE_WEATHER_ERR, RECEIVE_WEATHER_RES, SEND_WEATHER_REQ } from './weatherTypes';


export const sendWeatherReq = (query, lat, lon) => {
    return {
        type: SEND_WEATHER_REQ,
        payload: {query, lat, lon},
    };
};
export const receiveWeatherRes = (data) => {
    return {
        type: RECEIVE_WEATHER_RES,
        payload: data,
    };
};
export const receiveWeatherErr = (data) => {
    return {
        type: RECEIVE_WEATHER_ERR,
        payload: data,
    };
};

// export const getWeatherInfo = (query) => {
//     return (dispatch) => {
//         if(query !== '') {
//             dispatch(sendWeatherReq() );
//             axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=0ee1ff51419e81006287f7ccb99df952`)
//                 .then((res) => {
//                     dispatch(receiveWeatherRes(res.data));
//                 }).catch((err) => {
//                     dispatch(receiveWeatherErr(err));
//                 });
//         };
//     };
// };