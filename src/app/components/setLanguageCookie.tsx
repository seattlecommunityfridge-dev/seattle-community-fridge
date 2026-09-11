"use server";
import { cookies } from "next/headers";

const localeCookieName = 'locale';

export async function setLanguageCookie(language: string) {
	const cookieStore = await cookies();

	cookieStore.set(localeCookieName, language);
}