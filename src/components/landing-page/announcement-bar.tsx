import React from 'react';
import { Button } from '@/components/ui/button';

export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-2 px-4 text-sm font-semibold shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center relative gap-2 sm:gap-0">
        <p className="text-center">
          Намалена цена за първите поръчали – вместо <span className="line-through">15.99€</span> само 11.99€
        </p>
        <div className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2">
          <Button asChild size="sm" className="font-bold rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href="#order-form">Поръчай сега</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
