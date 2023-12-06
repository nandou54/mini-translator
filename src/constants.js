const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY

const TRANSLATE_API_URL =
  'https://google-translate1.p.rapidapi.com/language/translate/v2'

const TRANSLATE_API_OPTIONS = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': RAPID_API_KEY
  }
}
const languageNames = new Intl.DisplayNames(['es'], { type: 'language' })

export { TRANSLATE_API_URL, TRANSLATE_API_OPTIONS, languageNames }
