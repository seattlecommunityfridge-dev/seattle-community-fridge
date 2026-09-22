"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { setLanguageCookie } from "./setLanguageCookie";

type LanguageLinkProps = {
  language: string;
  native_name: string;
  locale: string;
}

/*
	Links to the same page with another language.
*/
export function LanguageLink(props: LanguageLinkProps) {
	const lang_names = useTranslations("language-names");

	return (
		<Link href="#" onNavigate={(e) => {
			setLanguageCookie(props.locale);
		}}>
			{lang_names(props.language)} ({props.native_name})
		</Link>
	);
}