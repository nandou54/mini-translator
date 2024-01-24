const TRANSLATE_API_URL = 'https://translate-plus.p.rapidapi.com/'
const RAPID_API_KEY = '1dc68f5c9amsh2763ce2f63be3e9p1e5047jsne0923875491b'

const TRANSLATE_API_OPTIONS = {
  baseURL: TRANSLATE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com',
    'X-RapidAPI-Key': RAPID_API_KEY
  }
}
const LANGUAGE_NAMES = new Intl.DisplayNames(['es'], { type: 'language' })

export { LANGUAGE_NAMES, TRANSLATE_API_OPTIONS }
