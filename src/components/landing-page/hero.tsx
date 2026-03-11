import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Моята бременност от А до Я
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              Спокойно и практично ръководство, което ще те преведе от първия положителен тест до мига, в който държиш бебето си в ръце.
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-xl text-balance">
              Забрави за стреса и безкрайното търсене на информация. Тази книга е твоят верен приятел по пътя към майчинството – написана с грижа от майка за бъдещи майки, за да се чувстваш уверена, подготвена и спокойна.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
              <Button asChild size="lg" className="font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <a href="#order-form">Поръчай книгата</a>
              </Button>
              <div className="text-center sm:text-left">
                <p className="font-bold text-3xl text-primary">11.99€ <span className="text-lg text-muted-foreground line-through ml-2">15.99€</span></p>
                <p className="text-sm text-primary font-medium">Промоционална цена за ограничено време</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-md mx-auto lg:max-w-none">
            <Image
                src="/cover.jpg"
                alt="Корица на книгата Моята бременност от А до Я"
                fill
                className="object-contain object-center drop-shadow-lg"
                data-ai-hint="book cover"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
