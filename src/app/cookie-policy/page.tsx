
import { AppFooter } from '@/components/landing-page/footer';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="relative bg-background">
      <div className="bg-soft-smoke" />
      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 z-10">
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-lg">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Политика за бисквитки</h1>
          <div className="space-y-4 text-muted-foreground">
            <h2 className="font-semibold text-xl text-foreground">Бисквитки</h2>
            <p>Нашият уеб сайт използва така наречените „бисквитки“. Това са малки текстови файлове, които се зареждат в браузъра и се съхраняват на Вашето крайно устройство. Те са безобидни. Повечето големи уебсайтове също използват този метод.</p>
            <p>Използваме ги, за да поддържаме сайта си лесен за употреба. Някои „бисквитки“ остават съхранени на устройството Ви, докато не ги изтриете. Те ни позволяват да разпознаем Вашия браузър при следващото ви посещение в нашия сайт.</p>
            
            <h2 className="font-semibold text-xl text-foreground pt-4">Какво представляват бисквитките?</h2>
            <p>Бисквитките са малки текстови файлове, които се запазват на вашия компютър или мобилно устройство, когато посещавате даден уебсайт. Те позволяват на уебсайта да запаметява вашите действия и предпочитания (като например потребителско име, език, размер на шрифта и други настройки за показване) за определен период от време, за да не се налага да ги въвеждате всеки път, когато посещавате сайта или преминавате от една страница към друга.</p>

            <h2 className="font-semibold text-xl text-foreground pt-4">По какъв начин използваме бисквитките?</h2>
            <p>Посещаването на този сайт може да създаде бисквитки със следните цели:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Бисквитки за производителност на сайта;</li>
              <li>Бисквитки за анализиране на посетителите на сайта;</li>
              <li>Биквитки за географско насочване;</li>
              <li>Бисквитки за регистрация;</li>
              <li>Бисквитки за рекламна дейност;</li>
              <li>Бисквитки на рекламодателите.</li>
            </ul>
            <p>Разрешаването на бисквитките не е абсолютно необходимо, за да може уебсайтът да работи, но ще допринесе за по-доброто му използване. Можете да изтриете или блокирате бисквитките, но ако го направите е възможно някои функции на сайта да не работят както трябва.</p>
            <p>Свързаната с бисквитките информация не се използва за установяване на самоличността ви, а образците с данни са изцяло под наш контрол. Бисквитките не се използват за цели, различни от посочените тук.</p>
            
            <h2 className="font-semibold text-xl text-foreground pt-4">Бисквитки на трети страни:</h2>
            <p>Използваме бисквитки на трети страни за събиране на статистически данни в сбита форма чрез инструменти за анализ, като Google Analytics, GoogleAdwords, Facebook.</p>
            
            <h2 className="font-semibold text-xl text-foreground pt-4">Как да контролирате бисквитките?</h2>
            <p>Можете да контролирате и/или изтривате бисквитки, когато пожелаете – за повече информация вижте:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><Link href="https://support.google.com/chrome/answer/95647?hl=bg" target="_blank" className="text-primary hover:underline">Google Chrome</Link></li>
              <li><Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" className="text-primary hover:underline">Mozilla Firefox</Link></li>
              <li><Link href="https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" target="_blank" className="text-primary hover:underline">Internet Explorer</Link></li>
              <li><Link href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/" target="_blank" className="text-primary hover:underline">Opera</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
