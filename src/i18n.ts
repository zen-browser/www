import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

const SUPPORTED_LANGUAGES = ['en', 'de', 'ro']; 

export default getRequestConfig(async () => {
  const headersList = headers();
  
  const acceptLanguage = headersList.get("accept-language") || "en";
  
  const [primaryLanguage] = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0])
    .map((lang) => lang.toLowerCase());

  const locale = SUPPORTED_LANGUAGES.includes(primaryLanguage) ? primaryLanguage : 'en';

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    
    const fallbackMessages = (await import(`../messages/en.json`)).default;

    return {
      locale: "en",
      messages: fallbackMessages,
    };
  }
});
