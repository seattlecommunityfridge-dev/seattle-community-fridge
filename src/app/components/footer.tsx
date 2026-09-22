'use client';
import { useTranslations } from 'next-intl';
import { LanguageLink } from "./LanguageLink";

export default function Footer() {
    const t = useTranslations("footer");
    return (
        <div className="mt-16 w-full h-24 text-center">
            <p>
                {t('languages-info')}
            </p>
            <LanguageLink language={"english"} native_name={"English"} locale={"en"} /><span> * </span>
            <LanguageLink language={"spanish"} native_name={"Español"} locale={"es"} /><span> * </span>
            <LanguageLink language={"chinese-simplified"} native_name={"中文"} locale={"zh"} />
        </div>
    )
}