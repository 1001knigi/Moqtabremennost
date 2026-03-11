'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function PregnancyTestButton() {
  const [isPositive, setIsPositive] = useState(false);

  const handleClick = () => {
    // The second click functionality is removed. Only sets state once.
    setIsPositive(true);
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 bg-transparent gap-4">
        <div className="h-7 text-center relative font-headline text-lg font-semibold text-primary">
            <span
                className={cn(
                'transition-opacity duration-300',
                isPositive ? 'opacity-0' : 'opacity-100'
                )}
            >
                Кликни за резултат
            </span>
            <span
                className={cn(
                'transition-opacity duration-300 absolute inset-0 flex items-center justify-center',
                !isPositive ? 'opacity-0' : 'opacity-100'
                )}
            >
                Положителен!
            </span>
        </div>

        <button
            onClick={handleClick}
            className="relative w-96 h-16 bg-card rounded-full shadow-lg border border-gray-200 flex items-center justify-center p-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-live="polite"
        >
            {/* Result Window */}
            <div className="w-24 h-full bg-background rounded-lg border-2 border-gray-300 flex items-center justify-center gap-2.5">
            <div className={cn('w-2 h-8 rounded-full bg-primary/90 transition-all duration-300', isPositive ? 'opacity-100' : 'opacity-0')} />
            <div className={cn('w-2 h-8 rounded-full bg-primary/90 transition-all duration-300 delay-200', isPositive ? 'opacity-100' : 'opacity-0')} />
            </div>

            {/* Grip Handle */}
            <div className="absolute w-12 h-12 bg-primary/90 rounded-full right-2 top-1/2 -translate-y-1/2" />
        </button>
    </section>
  );
}
