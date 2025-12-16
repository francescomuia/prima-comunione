import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { TARGET_DATE } from '../constants';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +TARGET_DATE - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-glamour-gold rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-20 h-24 sm:w-28 sm:h-32 bg-white rounded-xl shadow-xl flex items-center justify-center border-2 border-pink-50">
          <span className="text-3xl sm:text-5xl font-serif font-bold text-glamour-rose">
            {value < 10 ? `0${value}` : value}
          </span>
        </div>
      </div>
      <span className="mt-4 text-sm sm:text-base font-bold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center items-center p-6 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 max-w-4xl mx-auto mt-10">
      <TimeUnit value={timeLeft.days} label="Giorni" />
      <TimeUnit value={timeLeft.hours} label="Ore" />
      <TimeUnit value={timeLeft.minutes} label="Minuti" />
      <TimeUnit value={timeLeft.seconds} label="Secondi" />
    </div>
  );
};

export default CountdownTimer;