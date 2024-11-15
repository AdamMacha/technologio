import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'cs'],
  defaultLocale: 'cs'
});
 
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};