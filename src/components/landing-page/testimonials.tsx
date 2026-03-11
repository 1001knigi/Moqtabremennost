import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonialsData = [
  { name: "Мария П.", quote: "Тази книга ми даде спокойствие още от първите седмици. Всичко е обяснено толкова просто и ясно!" },
  { name: "Елена Д.", quote: "Препоръчвам я на всяка бъдеща майка! Спести ми часове търсене в интернет и много притеснения." },
  { name: "Виктория С.", quote: "Най-после ръководство, което се фокусира и върху емоциите, а не само върху физическите промени." },
  { name: "Александра И.", quote: "Списъкът за покупки е безценен! Купих само най-необходимото и не съжалявам за нито една покупка." },
  { name: "Ралица Г.", quote: "Чувствах се толкова подготвена за раждането, благодарение на последните глави. Страхът просто изчезна." },
  { name: "Десислава В.", quote: "Подарих я на бременната си приятелка и тя не спира да ми благодари. Това е перфектният подарък." },
  { name: "Симона К.", quote: "Като майка за първи път, имах нужда точно от това - топъл и успокояващ глас, който да ме води." },
  { name: "Габриела Н.", quote: "Книгата е красива, лесна за четене и изключително полезна. Струва си всяка стотинка." }
];

export function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-'));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Какво казват майките, които я прочетоха?
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow flex flex-col bg-card">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-muted-foreground flex-grow">"{testimonial.quote}"</blockquote>
                <div className="mt-6 flex items-center gap-4">
                  {testimonialImages[index] && (
                     <Image src={testimonialImages[index].imageUrl} alt={testimonial.name} width={40} height={40} className="rounded-full" data-ai-hint={testimonialImages[index].imageHint} />
                  )}
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
