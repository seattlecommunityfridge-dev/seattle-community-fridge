import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Calendar() {
  const t = useTranslations("calendar");
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="w-full">
        <h1>{t('title')}</h1>
      </section>
      
      {/* Calendar Section */}
      <section className="w-full flex justify-center my-8">
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=48bcae034e7634e636bf2fd012a6f616e249cf119dc89cd3ccb73d48036f1785%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
          style={{ border: 0 }} 
          width="800" 
          height="600" 
          frameBorder="0" 
          scrolling="no"
        />
      </section>
      
      {/* Text Information Section */}
      <section className="w-full py-10">
        <div className="max-w-2xl mx-auto text-center px-4 text-black">
          <h2 className="text-xl font-bold mb-4 text-black">{t('event-prompt')}</h2>
          <p className="mb-4 text-black">
            {t('invite')}
          </p>
          
          <ul className="list-disc text-left max-w-md mx-auto mb-6 text-black">
            <li>{t('step-1')}</li>
            <li>{t('step-2')}</li>
            <li>{t('step-3')}</li>
            <li>{t('step-4')}</li>
            <li>{t('step-5')}</li>
          </ul>
          
          <p className="mb-6 text-black">
            <strong>{t('calendar-id-header')}</strong> <br />
            <span className="text-sm break-all text-black">48bcae034e7634e636bf2fd012a6f616e249cf119dc89cd3ccb73d48036f1785@group.calendar.google.com</span>
          </p>
          
          <p className="text-black">
            {t.rich('fill-form', {
                "link": (chunks) => <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdM-soVwvRMQY0ApGHavnaNLjc3jkp4RLi48qhjlF-8ZwhFiA/viewform?usp=preview">{chunks}</Link>
            })}
          </p>
        </div>
      </section>
    </div>
  );
}
