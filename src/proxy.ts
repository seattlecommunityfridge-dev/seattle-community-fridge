import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { pick } from 'accept-language-parser';

const available_languages = ['en', 'zh', 'es']
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  console.log(`[Proxy] ${request.method} ${request.nextUrl.pathname}`)
  const response = NextResponse.next();

  const localeCookieName = 'locale';

  // Add localization cookie
  if (!request.cookies.has(localeCookieName)) {
    const header = request.headers.get('accept-language');

    const idealLanguage = pick(available_languages, header);
    if (idealLanguage) {
      console.log(`[Proxy] set language to ${idealLanguage}`)
      response.cookies.set(localeCookieName, idealLanguage);
    }
  }

  return response;
};

export const config = {
  matcher: [
    { // Runs this proxy in order to add a cookie for the user language.
      source: '/((?!api|backend/|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)',
      has: [ { type: 'header', key:'Accept-Language' } ],
      missing: [{ type: 'cookie', key: 'locale' }]
    }
  ],
};