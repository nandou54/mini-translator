const RAPID_API_KEY = '1dc68f5c9amsh2763ce2f63be3e9p1e5047jsne0923875491b'

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
