import { AnnouncementBar } from '@/components/landing-page/announcement-bar';
import { Hero } from '@/components/landing-page/hero';
import { ProblemSection } from '@/components/landing-page/problem-section';
import { SolutionSection } from '@/components/landing-page/solution-section';
import { WhatYouWillLearn } from '@/components/landing-page/what-you-will-learn';
import { InsideTheBook } from '@/components/landing-page/inside-the-book';
import { WhyDifferent } from '@/components/landing-page/why-different';
import { Testimonials } from '@/components/landing-page/testimonials';
import { PricingSection } from '@/components/landing-page/pricing-section';
import { FaqSection } from '@/components/landing-page/faq-section';
import { AppFooter } from '@/components/landing-page/footer';
import { OrderForm } from '@/components/landing-page/order-form';
import { SatisfiedCustomerSection } from '@/components/landing-page/satisfied-customer';

export default function Home() {
  return (
    <div className="relative bg-background">
      <div className="bg-soft-smoke" />
      <AnnouncementBar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WhatYouWillLearn />
        <InsideTheBook />
        <WhyDifferent />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <SatisfiedCustomerSection />
        <OrderForm />
      </main>
      <AppFooter />
    </div>
  );
}
