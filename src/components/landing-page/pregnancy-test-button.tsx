'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function PregnancyTestButton() {
  const [isPositive, setIsPositive] = useState(false);

  const handleClick = () => {
    if (isPositive) {
      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsPositive(true);
    }
  };

  return (
    <section className="flex justify-center items-center py-10 bg-transparent">
      <button
        onClick={handleClick}
        className="relative w-80 h-16 bg-card rounded-full shadow-lg border border-gray-200 flex items-center justify-between p-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-live="polite"
      >
        {/* Result Window */}
        <div className="w-24 h-full bg-background rounded-lg border-2 border-gray-300 flex items-center justify-center gap-2.5">
          <div className={cn('w-2 h-8 rounded-full bg-primary/90 transition-all duration-300', isPositive ? 'opacity-100' : 'opacity-0')} />
          <div className={cn('w-2 h-8 rounded-full bg-primary/90 transition-all duration-300 delay-200', isPositive ? 'opacity-100' : 'opacity-0')} />
        </div>

        {/* Text Area */}
        <div className="flex-1 text-center relative h-full flex items-center justify-center">
          <span
            className={cn(
              'font-headline text-lg font-semibold text-primary transition-opacity duration-300',
              isPositive ? 'opacity-0' : 'opacity-100'
            )}
          >
            Кликни за резултат
          </span>
          <span
            className={cn(
              'font-headline text-lg font-semibold text-primary transition-opacity duration-300 absolute inset-0 flex items-center justify-center',
              !isPositive ? 'opacity-0' : 'opacity-100'
            )}
          >
            Положителен!
          </span>
        </div>

        {/* Grip Handle */}
        <div className="w-12 h-12 bg-primary/90 rounded-full" />
      </button>
    </section>
  );
}
