import React from 'react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './countdown-timer';

export function AnnouncementBar() {
  // 7 days from March 19, 2026, 00:00:00
  const targetDate = '2026-03-26T00:00:00';

  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-3 px-4 text-sm font-semibold shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center relative gap-4">
        <p className="text-center">
          Намалена цена за първите поръчали – вместо <span className="line-through">15.99€</span> само 11.99€
        </p>

        <CountdownTimer targetDate={targetDate} />
        
        <div className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2">
          <Button asChild size="sm" className="font-bold rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href="#order-form">Поръчай сега</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
