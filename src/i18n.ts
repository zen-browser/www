import { getRequestConfig } from "next-intl/server";

export const SUPPORTED_LANGUAGES = ['en', 'de']; 

export default getRequestConfig(async ({locale}) => {
  const lang = SUPPORTED_LANGUAGES.includes(locale) ? locale : 'en';
  const messages = await import(`../messages/${lang}.json`);
  return {messages};
});
