import React, { useEffect, useState } from 'react';
import moment from 'moment-jalaali';

const weekDays = [
    'یک شنبه',
    'دوشنبه',
    'سه شنبه',
    'چهار شنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
];

const yearsMonth = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
];


const Date = ({ bgMode }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        let m = moment();
        const finalDate = `${weekDays[m.day()]}  ${m.jDate()} ${yearsMonth[m.jMonth()]} ماه ${m.jYear()}`;
        setDate(finalDate);
        
        setTime(m.format('HH:mm') );
    }, []);

    
    return (
        <>
            <p className="font-semibold flex items-center text-base tracking-[.001rem] text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{date}</span>
            </p>

            <p className="font-semibold text- flex items-center text-base mt-3 tracking-[.1rem] text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{time}</span>
            </p>
        </>
    );
}

export default Date;
