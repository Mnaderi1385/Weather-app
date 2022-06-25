import { receiveWeatherErr } from './weatherActions';
import { RECEIVE_WEATHER_ERR, RECEIVE_WEATHER_RES, SEND_WEATHER_REQ } from './weatherTypes';

const weatherStates = {
    loading: false,
    data: [],
    err: ''
};


const weatherReducer = (state = weatherStates, action) => {
    switch (action.type) {
        case SEND_WEATHER_REQ:
            return { ...state, loading: true }
            break;
        case RECEIVE_WEATHER_RES:
            return { loading: false, data: action.payload, err: '' }
            break;
        case RECEIVE_WEATHER_ERR:
            return { loading: false, data: [], err: 'مشکلی پیش اومده لطفا دوباره تلاش کنید' }
            break;
        default:
            return state
            break;
    }
};

export default weatherReducer;