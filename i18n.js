import NextI18Next from 'next-i18next';

module.exports = new NextI18Next({
    preload: ['en'],
    defaultLanguage: 'en',
    otherLanguages: ['kr'],
    localePath: 'static/locales',
    keySeparator: false,
    fallbackLng: ['common', 'en'],
    localeSubpaths: true
});