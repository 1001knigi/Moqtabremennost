import { Stethoscope, ClipboardCheck, Salad, Smile, Home, Baby, Feather } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const topics = [
  { icon: Stethoscope, title: "Избор на проследяващ лекар", description: "Как да избереш правилния АГ специалист, на когото да се довериш." },
  { icon: ClipboardCheck, title: "Важни прегледи и изследвания", description: "Ключовите моменти и прегледи през всеки триместър." },
  { icon: Salad, title: "Хранене и добавки", description: "Основите на пълноценното хранене за теб и бебето." },
  { icon: Smile, title: "Емоционален баланс", description: "Техники за намаляване на стреса и поддържане на добро настроение." },
  { icon: Home, title: "Подготовка на дома", description: "Как да направиш дома си уютен и безопасен за новия член на семейството." },
  { icon: Baby, title: "Списък с покупки за бебето", description: "Само най-необходимото, без излишни разходи." },
  { icon: Feather, title: "Спокойна подготовка за раждането", description: "Какво да очакваш и как да се подготвиш психически и физически." }
];

export function WhatYouWillLearn() {
  return (
    <section className="py-16 md:py-24 bg-card/50 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Какво ще научиш от книгата?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Стъпка по стъпка, тази книга покрива всичко важно, за да се чувстваш подготвена.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow bg-card">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/50 rounded-full">
                  <topic.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{topic.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6">
                {topic.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
