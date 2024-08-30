# Contributing Translations

Translation is handled by the [next-intl](https://next-intl-docs.vercel.app/) library. 

To contribute to the translation of your language you must modify the JSON in `/messages` that is named corresponding to the [ISO Language Code](https://www.w3schools.com/tags/ref_language_codes.asp) of your given language. 

When modifying the key-value pairs in the JSON files, ensure you only change the value and not the key. 

Syntax: `"key": "value",`

If you do not see a JSON for your language then may add the language by following the instructions below. 

## Adding a language 

1.  Add the language to the `const SUPPORTED_LANGUAGES = ['en', 'de'];` variable in the `./src/i18n.ts` file.
2. Create a new `.json` file in the `./messages` directory named after the [ISO Language Code](https://www.w3schools.com/tags/ref_language_codes.asp) of the language.
3. Copy the contents of the `en.json` file, make your way down the key-value pairs changing **only the values** to the translated equivalent.

## Usage

The key-value pairs are organised into parent keys called **namespaces**.

In the JSON define the namespaces and their key-value pairs:
```json
{
    "home-page": {
        "home-hero-text": "Zen is the best way to browse the web.",
        "home-hero-subtext": "Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data.",
```

... then reference these key-value pairs in the TSX instead of using static text:

```jsx
import { useTranslations } from "next-intl";

function HomePage() {
    const t = useTranslations('home-page');

    return (
        <>
            <h1>{t('home-hero-text')}</h1>
            <p>{t('home-hero-subtext')}</p>
        </>
    )
}
```

## Troubleshooting

### Missing Key In JSON

Each language JSON should have the same set of keys as all the others. If a language is missing a key then you will see the name of the *key* in place of the value on the website. 

You will also be able to see errors on the console in the browser developer tools. 
```
❌ Error: MISSING_MESSAGE: Could not resolve `home-hero-text` in messages for locale `en`.
```
This means that en.json is missing the 'home-hero-text' key.

If this occurs then find the key that is missing and add it to the JSON.

### Key Is Not Referenced In The TSX

Translations only work if the developer chooses to use the translated value in place of the static value in their HTML. 

Not translated:
```
<button>Click Me</button>
```

Translated:
```
<button>{t('translated-click-me')}
```

The JSON is organized by the file names in the `/components` directory. Find the `.tsx` file that generates the untranslated text and modify it to use the translated value. 

### Documentation

If the error persists consult the [next-intl documentation](https://next-intl-docs.vercel.app/docs/getting-started).


