import { XCircle } from 'lucide-react';

const problems = [
  "Твърде много информация онлайн",
  "Противоречиви съвети от близки и приятели",
  "Стрес и страх от неизвестното",
  "Не знаеш какво наистина трябва да купиш за бебето",
  "Несигурност как да се подготвиш за раждането"
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-card/50 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Чувстваш ли се объркана след положителния тест?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Ако кимаш с глава, не си сама. Повечето бъдещи майки се сблъскват с океан от информация и емоции.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg">
              <XCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
