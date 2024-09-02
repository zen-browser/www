import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export const SUPPORTED_LANGUAGES = ['en', 'de', 'ro']; 

export default getRequestConfig(async ({locale}) => {
  const lang = SUPPORTED_LANGUAGES.includes(locale) ? locale : 'en';
  const messages = await import(`../messages/${lang}.json`);
  return {messages};
});
