import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function SolutionSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative h-[450px] w-full max-w-md mx-auto lg:max-w-none order-last lg:order-first">
                        <Card className="h-full w-full flex items-center justify-center bg-accent/30 shadow-xl rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                            <CardContent className="p-8 text-center">
                                <p className="font-headline text-3xl text-primary">Представи си...</p>
                                <p className="mt-4 text-xl text-muted-foreground text-balance">... да преминеш през бременността със спокойствие, увереност и ясен план за действие. Без стрес. Без чудене.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-left">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-balance">
                            Книгата, която ще бъде твоят пътеводител
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            "Моята бременност от А до Я" е създадена, за да премахне шума и да ти даде само най-важното – практични съвети и емоционална подкрепа, поднесени просто и ясно.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Остани спокойна и уверена</h3>
                                    <p className="text-muted-foreground">Научи кое наистина има значение и игнорирай останалото.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Подготви се емоционално и практически</h3>
                                    <p className="text-muted-foreground">От първия преглед до подготовката на дома за бебето.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Спести време, пари и нерви</h3>
                                    <p className="text-muted-foreground">Избегни ненужните покупки и се фокусирай върху здравето и щастието си.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
