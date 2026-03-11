import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="relative bg-background min-h-screen flex items-center justify-center">
      <div className="bg-soft-smoke" />
      <main className="container mx-auto px-4 md:px-6 text-center z-10">
        <div className="max-w-md mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-lg">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="font-headline text-3xl md:text-4xl font-bold">Благодарим за поръчката!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Вашата поръчка е приета успешно. Ще се свържем с вас скоро за потвърждение на посочения телефонен номер.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold rounded-full">
            <Link href="/">Обратно към началната страница</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
