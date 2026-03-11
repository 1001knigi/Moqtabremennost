'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };
    
    // Set initial time left on client-side to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return null; // Or a loading skeleton
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex items-center justify-center gap-2 text-center">
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
        <span>Промоцията изтече!</span>
      ) : (
        <>
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg">{String(days).padStart(2, '0')}</span>
                <span className="text-xs">Day(s)</span>
            </div>
            <span className="font-bold text-lg">:</span>
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg">{String(hours).padStart(2, '0')}</span>
                <span className="text-xs">Hour(s)</span>
            </div>
            <span className="font-bold text-lg">:</span>
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg">{String(minutes).padStart(2, '0')}</span>
                <span className="text-xs">Minute(s)</span>
            </div>
            <span className="font-bold text-lg">:</span>
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg">{String(seconds).padStart(2, '0')}</span>
                <span className="text-xs">Second(s)</span>
            </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
