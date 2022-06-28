import { SEND_WEATHER_REQ } from './weatherTypes';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { receiveWeatherErr, receiveWeatherRes } from './weatherActions';
import axios from 'axios';

const getWeatherReq = (cityQuery, latQuery, lonQuery) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&lat=${latQuery}&lon=${lonQuery}&units=metric&appid=0ee1ff51419e81006287f7ccb99df952`)
};

function * handleGetWeather(action) {
    try {
        const res = yield call(getWeatherReq, action.payload.query, action.payload.lat, action.payload.lon);
        yield put(receiveWeatherRes(res.data));
    } catch(err) {
        yield put(receiveWeatherErr(err.message));
    };
};


export function * watcherSaga() {
    yield takeLatest(SEND_WEATHER_REQ, handleGetWeather);
};



function * handleGetWeather2(action) {
    try {
        const res = yield call(getWeatherReq, action.payload);
        yield put(receiveWeatherRes(res.data));
    } catch(err) {
        yield put(receiveWeatherErr(err.message));
    };
};


export function * watcherSaga2() {
    yield takeLatest(SEND_WEATHER_REQ, handleGetWeather);
};







export function * rootSaga() {
    yield all([
        fork(watcherSaga),
        fork(watcherSaga2),
    ])
};