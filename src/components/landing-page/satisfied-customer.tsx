import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SatisfiedCustomerSection() {
  const customerImage = PlaceHolderImages.find(p => p.id === 'satisfied-customer-1');

  return (
    <section className="py-16 md:py-24 bg-card/50 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Истинска промяна за истински майки
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Вижте радостта и спокойствието, които книгата носи на читателите си.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-xl">
            {customerImage && (
              <Image
                src={customerImage.imageUrl}
                alt={customerImage.description}
                fill
                className="object-contain"
                data-ai-hint={customerImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
