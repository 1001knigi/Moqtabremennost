import { Heart, BookUser, MessageSquareQuote } from 'lucide-react';

const reasons = [
  { icon: Heart, title: "Написана от майка за майки", description: "Получаваш съвети от някой, който е минал по твоя път и разбира емоциите и притесненията ти." },
  { icon: BookUser, title: "Практични съвети, не сложна теория", description: "Вместо сух медицински език, книгата предлага лесни за следване стъпки и обяснения." },
  { icon: MessageSquareQuote, title: "Емоционална подкрепа", description: "Това не е просто наръчник, а приятел, който те подкрепя, успокоява и вдъхновява." }
];

export function WhyDifferent() {
  return (
    <section className="py-16 md:py-24 bg-card/50 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Защо тази книга е различна?
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="p-4 bg-accent/50 rounded-full">
                <reason.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-5 font-headline text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2 text-muted-foreground text-balance">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
