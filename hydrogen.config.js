import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'aliencafe.myshopify.com',
    storefrontToken: 'c6a397cdf9506e7495a51e087adf9b64',
    // apiKey: '7d701b783941151fca6e5b7ce86062f0',
    // apiSecretKey: '7ac807431979727903367255880a0f2b',
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
