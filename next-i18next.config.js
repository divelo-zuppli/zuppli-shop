const path = require('path');
module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
