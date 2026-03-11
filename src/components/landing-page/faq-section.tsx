import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Подходяща ли е книгата за първа бременност?",
    answer: "Абсолютно! Книгата е създадена специално за майки, които очакват първото си дете и се чувстват леко изгубени. Тя дава ясна и структурирана информация без излишен шум."
  },
  {
    question: "Съдържа ли книгата практически списъци (checklists)?",
    answer: "Да, включени са няколко много полезни списъка, като например такъв за най-важните покупки за бебето и чантата за родилното. Целта е да се улесните максимално."
  },
  {
    question: "Книгата замества ли медицинските съвети?",
    answer: "Не. Книгата предоставя практическа и емоционална подкрепа, но не замества консултациите с вашия проследяващ лекар. Тя е ваш помощник, а не медицински наръчник."
  },
  {
    question: "Кога е най-подходящото време да започна да я чета?",
    answer: "Можете да започнете веднага щом видите двете чертички! Колкото по-рано, толкова по-спокойна и информирана ще бъдете през цялата си бременност."
  },
  {
    question: "В какъв формат е книгата?",
    answer: "Това е физическа книга с меки корици, перфектна за четене в леглото или на дивана с чаша чай. Дизайнът е направен така, че да бъде приятен за окото и лесен за навигация."
  }
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Често задавани въпроси
          </h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <a href="#order-form">Искам спокойна бременност</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
