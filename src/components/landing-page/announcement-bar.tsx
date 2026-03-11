import React from 'react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-semibold">
      <p>
        Намалена цена за първите поръчали – вместо <span className="line-through">15.99€</span> само 11.99€
      </p>
    </div>
  );
}
