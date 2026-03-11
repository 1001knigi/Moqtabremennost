import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function PricingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl bg-gradient-to-br from-card to-accent/20 border-primary/50">
            <CardHeader className="text-center p-8">
              <CardTitle className="font-headline text-3xl">Специална цена за старта на книгата</CardTitle>
              <CardDescription className="text-base mt-2">
                За да помогнем на повече бъдещи майки, книгата стартира със специална намалена цена.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 p-8 pt-0">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">11.99€</p>
                <p className="text-lg text-muted-foreground line-through">15.99€</p>
              </div>
              <p className="text-sm text-primary font-semibold">Промоционалната цена е за ограничено време.</p>
              <Button asChild size="lg" className="w-full font-bold text-lg px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <a href="#order-form">Поръчай книгата сега</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
