import React, { useState, useEffect } from 'react';

const Counter = () => {
    const deadline = new Date('2025-01-26T00:00:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const difference = deadline - now;

        if (difference <= 0) {
            return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { months, days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    return (
        <div className="d-flex justify-content-between align-items-center ">
            <div className='text-light h1 d-flex flex-column align-items-center'>
                <span className='time-text '>{formatNumber(timeLeft.months)}</span>
                <p className='h6 px-2 py-1' style={{ backgroundColor: '#F7CD73', borderRadius: '1rem', fontSize: '0.8rem' }}>
                    months
                </p>
            </div>
            <span className="text-light h1" style={{ marginBottom: "3rem", fontSize: '1.5rem' }}>:</span>
            <div className='text-light h1 d-flex flex-column align-items-center'>
                <span className='time-text '>{formatNumber(timeLeft.days)}</span>
                <p className='h6 px-3 py-1' style={{ backgroundColor: '#F7CD73', borderRadius: '1rem', fontSize: '0.8rem' }}>
                    days
                </p>
            </div>
            <span className="text-light h1" style={{ marginBottom: "3rem", fontSize: '1.5rem' }}>:</span>
            <div className='text-light h1 d-flex flex-column align-items-center'>
                <span className='time-text'>{formatNumber(timeLeft.hours)}</span>
                <p className='h6 px-3 py-1' style={{ backgroundColor: '#F7CD73', borderRadius: '1rem', fontSize: '0.8rem' }}>
                    hours
                </p>
            </div>
            <span className="text-light h1" style={{ marginBottom: "3rem", fontSize: '1.5rem' }}>:</span>
            <div className='text-light h1 d-flex flex-column align-items-center'>
                <span className='time-text'>{formatNumber(timeLeft.minutes)}</span>
                <p className='h6 px-2 py-1' style={{ backgroundColor: '#F7CD73', borderRadius: '1rem', fontSize: '0.8rem' }}>
                    minutes
                </p>
            </div>
            <span className="text-light h1" style={{ marginBottom: "3rem", fontSize: '1.5rem' }}>:</span>
            <div className='text-light h1 d-flex flex-column align-items-center'>
                <span className='time-text'>{formatNumber(timeLeft.seconds)}</span>
                <p className='h6 px-2 py-1' style={{ backgroundColor: '#F7CD73', borderRadius: '1rem', fontSize: '0.8rem' }}>
                    seconds
                </p>
            </div>
        </div >
    );
};

export default Counter;
