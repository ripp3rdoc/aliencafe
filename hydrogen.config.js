import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';
require('dotenv').config();

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'aliencafe.myshopify.com',
    storefrontToken: process.env.storefrontToken,
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
