import { BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const chapters = [
  "Новината, която променя всичко",
  "Медицинска грижа и проследяване",
  "Грижа за тялото и храненето",
  "Спокойна бременност",
  "Подготовка на дома и живота за бебето",
  "Лично време",
  "Подготовка за раждането"
];

export function InsideTheBook() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Какво ще откриеш вътре?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Прегледай съдържанието, което ще те води през твоята бременност.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="shadow-xl bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-2xl">Съдържание</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4">
                {chapters.map((chapter, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">{index + 1}.</span>
                    <p className="text-muted-foreground pt-0.5">{chapter}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
