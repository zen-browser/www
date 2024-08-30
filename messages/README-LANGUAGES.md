# Contributing Translations

To contribute to the translation of your language you must modify the json in `/messages` that is named corresponding to the ISO Language Code of your given language. 

If you do not see a JSON for your language then add the language. 

## Adding a language 

1.  To add a language you must add the language to the `const SUPPORTED_LANGUAGES = ['en', 'de'];` variable in the `./src/i18n.ts` file.
2. You must create a new `.json` file in the `./messages` directory
3. Copy the contents of the `en.json` file, make your way down the key-value pairs and change **only the values** to the translated equivalent.







