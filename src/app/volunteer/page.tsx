import { Button } from '@headlessui/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export default function Volunteer() {
    const t = useTranslations("volunteer");
    return (
        <section className="h-full w-full">
            <h1>{t('title')}</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full my-auto lg:w-1/2">
                    <Image width={1080} height={1080} src="https://storage.googleapis.com/seattle-community-fridge/volunteer/reid_volunteer.jpg" alt="reid_volunteer" />
                </div>
                <div className="w-full lg:w-1/3 h-full mx-auto text-black text-xl sm:text-3xl">
                    <Button as="a" href="https://docs.google.com/forms/d/1kMWMJjlL982TLGBM3iUvNhiHhGT0hwJF0sRY22gHEug/viewform" 
                        className="flex items-center justify-center border-black border bg-green-500 w-full h-30 rounded-lg text-black"
                        target="_blank" rel="noreferrer noopener">
                        {t('sign-up')}
                    </Button>

                    <ul className="space-y-6 mt-7 lg:mt-7">
                        <li>{t('opportunity1')}</li>
                        <li>{t('opportunity2')}</li>
                        <li>{t('opportunity3')}</li>
                        <li>{t('opportunity4')}</li>
                        <li>{t('opportunity5')}</li>
                        <li>{t('opportunity6')}</li>
                    </ul>
                    <p className="mt-14 lg:mt-20">
                        {t.rich('questions', {
                            email: (chunks) => <span><a href="mailto:seattlecommunityfridge@gmail.com" target="_blank" rel="noreferrer noopener">{chunks}</a></span>
                        })}
                    </p>
                    <p>
                        {t.rich('faq-ref', {
                            "link-faq": (chunks) => <a href="/faq">{chunks}</a>
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}
