import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import getWeatherInfo from '../../Redux/weatherActions';
import Date from '../Date/Date';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { sendWeatherReq } from '../../Redux/weatherActions';
import { useRef } from 'react';


const Weather = () => {
    const { err, data, loading } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [cityQuery, setCityQuery] = useState('');
    const [latQuery, setLatQuery] = useState('');
    const [lonQuery, setLonQuery] = useState('');
    const [bgMode, setBgMode] = useState('cold');
    const input = useRef();


    const handleGetWeather = (e) => {
        e.preventDefault();

        dispatch(sendWeatherReq(cityQuery, latQuery, lonQuery));
        setCityQuery('');
        if(err) {
            toast.error('مشکلی پیش اومده لطفا دوباره تلاش کنید', {
                style: {
                    background: 'red',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '1rem',
                },
                position: 'bottom-center',
            });
        }
    };

    useEffect(() => input.current.focus() , []);

    useEffect(() => {
        if(!data.main) return;

        const temp = data.main.temp;

        if(temp < 15) setBgMode('cold');
        else if(temp < 23) setBgMode('usual');
        else setBgMode('warm');
    }, [data]);


    return (
        <div className={`px-4 w-full flex justify-center min-h-screen bg-${bgMode} bg-no-repeat bg-center bg-cover`}>
            <div className="lg:max-w-2xl w-full mx-auto text-center pt-10">
                <div className="bg-slate-400/60 p-5 rounded-lg mx-auto">
                    <h1 className={`text-lg sm:text-2xl font-bold ${bgMode === 'usual' || bgMode === 'cold' ? 'text-slate-700' : 'text-slate-100'} text-slate-100`}>وضعیت آب و هوا</h1>
                    
                    <form action="#" className="mt-24" onSubmit={handleGetWeather}>
                        <input type="text" ref={input} placeholder={data.name || 'نام شهر ...'} className="w-full bg-transparent text-slate-700 text-sm p-3 outline-none border-slate-600 border-2 duration-200 font-bold placeholder:font-semibold placeholder:text-slate-700 rounded-md mt-2" value={cityQuery} onChange={(e) => setCityQuery(e.target.value)} />
                        <input type="number" placeholder={data.name ? data.coord.lon : 'طول جفرافیایی (اختیاری)'} className="w-full bg-transparent text-slate-700 text-sm p-3 outline-none border-slate-600 border-2 duration-200 font-bold placeholder:font-semibold placeholder:text-slate-700 rounded-md mt-2" value={lonQuery} onChange={(e) => setLonQuery(e.target.value)} />
                        <input type="number" placeholder={data.name ? data.coord.lat : 'عرض جفرافیایی (اختیاری)'} className="w-full bg-transparent text-slate-700 text-sm p-3 outline-none border-slate-600 border-2 duration-200 font-bold placeholder:font-semibold placeholder:text-slate-700 rounded-md mt-2" value={latQuery} onChange={(e) => setLatQuery(e.target.value)} />
                        <button type="submit" className="bg-orange-600 text-white text-sm mt-4 mr-2 px-4 py-3 duration-100 rounded-md focus:ring-4 ring-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>

                    <div className="flex flex-col justify-between items-center text-center mx-auto mt-10">
                        <Date />
                    </div>
                </div>

                {
                    (loading) ? (
                        <Loading />
                    ): (data.main) ? (
                        <div className="bg-slate-500/90 animate-show rounded-md py-5 px-3 my-16 mx-auto duration-500 hover:-translate-y-1">
                            <h2 className="font-bold text-lg md:text-4xl text-white animate-pulse mt-5">{ data.name }</h2>
                            <h3 className="font-bold text-lg md:text-3xl text-gray-300 mt-5" dir="ltr">{ `${data.main.temp}  C°` }</h3>
                            <h3 className="font-bold text-base md:text-lg text-gray-400 my-5">{ data.weather[0].main }</h3>
                            <span className="font-medium text-sm text-gray-300" dir="ltr">طول جغرافیایی: { data.coord.lon }</span><br /><br />
                            <span className="font-medium text-sm text-gray-300" dir="ltr">عرض جغرافیایی: { data.coord.lat }</span>
                        </div>
                    ) : (
                        <div className="bg-slate-500/90 rounded-lg py-5 px-3 my-16 mx-auto">
                            <h3 className="font-medium text-sm md:text-base text-gray-200">نام شهر خود را وارد کنید</h3>
                        </div>
                    )
                }
            </div>

            <Toaster />
        </div>
    );
}

export default Weather;
