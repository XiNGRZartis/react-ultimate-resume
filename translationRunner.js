// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'locales/extracted_locales',
    whitelistsDirectory: 'src/package/i18n/whitelist',
    translationsDirectory: 'src/package/i18n',
    languages: ['fr', 'en', 'tr'], // any language you need,
    detectDuplicateIds: false
});
