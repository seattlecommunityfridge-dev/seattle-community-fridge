import Image from 'next/image';
import { Button } from '@headlessui/react'
import { useTranslations } from 'next-intl';

export default function GetFood() {
    const t = useTranslations("get-food");
    return (
        <section className="h-full w-full text-center">
            <h1>{t('title')}</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl">
                    <ul className="space-y-6 lg:mt-4">
                        <li>{t('instruction')}</li>
                    </ul>

                    <Button as="a" className="flex items-center justify-center border-black border bg-blue-500 w-full h-100 my-auto rounded-lg text-black" href="/locations" title="Fridge Map">
                      <div className="grid grid-cols-1 justify-items-center">
                        <div><Image width={200} height={0} src="/fridge_map_icon.png" id="Fridge Map" alt="Fridge Map" /></div>
                        <div>{t('fridge-locations-button')}</div>
                      </div>
                    </Button>
                </div>
            </div>
            <h1 className="text-3xl sm:text-6xl mt-8 font-JosefinSans text-blue-500">{t('food-faq')}</h1>
            <div>
                <h2 className="question">{t('q1')}</h2>
                <p className="answer">
                    {t('a1')}
                </p>
                <h2 className="question">{t('q2')}</h2>
                <p className="answer">
                    {t('a2')}
                </p>
                <h2 className="question">{t('q3')}</h2>
                <p className="answer">
                    {t('a3')}
                </p>
                <h2 className="question">{t('q4')}</h2>
                <p className="answer">
                    {t('a4')}
                </p>
                <h2 className="question">{t('q5')}</h2>
                <p className="answer">
                    {t('a5')}
                </p>
                <h2 className="question">{t('q6')}</h2>
                <p className="answer">
                    {t('a6')}
                </p>
            </div>
        </section>
    )
}