'use client';
import { LanguageLink } from "./LanguageLink";

export default function Footer() {
    return (
        <div className="w-full h-24">
            <LanguageLink language={"english"} native_name={"English"} locale={"en"} /><span> * </span>
            <LanguageLink language={"spanish"} native_name={"Español"} locale={"es"} /><span> * </span>
            <LanguageLink language={"chinese-simplified"} native_name={"中文"} locale={"zh"} />
        </div>
    )
}