import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import vi from './lang/vi'
import en from './lang/en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: vi,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'en', // use en if detected lng is not available
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format(value, format) {
        if (format === 'lowercase') {
          return value.toLowerCase()
        }

        return value
      },
    },
  })

export default i18n
