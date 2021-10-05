const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY
const SPELL_API_KEY = import.meta.env.VITE_SPELL_API_KEY

const TRANSLATE_API_URL = 'https://deep-translate1.p.rapidapi.com/language/translate/v2'

const SPELL_API_URL = 'https://voicerss-text-to-speech.p.rapidapi.com/'

const TRANSLATE_API_OPTIONS = {
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
    'x-rapidapi-key': RAPID_API_KEY
  }
}

const SPELL_API_OPTIONS = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
    'x-rapidapi-key': RAPID_API_KEY
  },
  params: { key: SPELL_API_KEY, b64: true }
}

const SPELL_LANGUAGES = [
  'ar-eg',
  'ar-sa',
  'bg-bg',
  'ca-es',
  'zh-cn',
  'zh-hk',
  'zh-tw',
  'hr-hr',
  'cs-cz',
  'da-dk',
  'nl-be',
  'nl-nl',
  'en-au',
  'en-ca',
  'en-gb',
  'en-in',
  'en-ie',
  'en-us',
  'fi-fi',
  'fr-ca',
  'fr-fr',
  'fr-ch',
  'de-at',
  'de-de',
  'de-ch',
  'el-gr',
  'he-il',
  'hi-in',
  'hu-hu',
  'id-id',
  'it-it',
  'ja-jp',
  'ko-kr',
  'ms-my',
  'nb-no',
  'pl-pl',
  'pt-br',
  'pt-pt',
  'ro-ro',
  'ru-ru',
  'sk-sk',
  'sl-si',
  'es-mx',
  'es-es',
  'sv-se',
  'ta-in',
  'th-th',
  'tr-tr',
  'vi-vn'
]

const languageNames = new Intl.DisplayNames(['es'], { type: 'language' })

export {
  TRANSLATE_API_URL,
  SPELL_API_URL,
  TRANSLATE_API_OPTIONS,
  SPELL_API_OPTIONS,
  SPELL_LANGUAGES,
  languageNames
}
