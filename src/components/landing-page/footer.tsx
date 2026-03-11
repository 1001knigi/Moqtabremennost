import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="bg-card/50 border-t mt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-xl font-semibold">Моята бременност от А до Я</h3>
            <p className="mt-2 text-sm text-muted-foreground">Вашият спокоен пътеводител в света на майчинството.</p>
          </div>
          <div>
            <h3 className="font-semibold">Контакти</h3>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contact@placeholder.com</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Последвайте ни</h3>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Моята Бременност А-Я. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
}
