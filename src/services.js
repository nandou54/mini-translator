import axios from 'axios'
import { LANGUAGE_NAMES, TRANSLATE_API_OPTIONS } from './constants'

const customAxios = axios.create(TRANSLATE_API_OPTIONS)

async function initLanguages() {
  try {
    let languages = JSON.parse(localStorage.getItem('languages'))
    if (languages) return languages

    const response = await customAxios.get('/', TRANSLATE_API_OPTIONS)
    languages = Object.values(response.data.supported_languages).map(
      (locale) => ({ locale, name: LANGUAGE_NAMES.of(locale) })
    )
    languages.sort((a, b) => {
      return a.name === 'auto' || b.name === 'auto' || a.name > b.name ? 1 : -1
    })

    localStorage.setItem('languages', JSON.stringify(languages))

    return languages
  } catch (message) {
    return console.log(message)
  }
}

async function translateText(data) {
  try {
    const response = await customAxios.post(
      '/translate',
      data,
      TRANSLATE_API_OPTIONS
    )
    const translation = response.data.translations.translation

    return translation
  } catch (message) {
    return console.log(message)
  }
}

function spellText(text, languageName) {
  const utterThis = new SpeechSynthesisUtterance(text)

  const voice = speechSynthesis
    .getVoices()
    .find((voice) => voice.name === languageName)
  utterThis.voice = voice

  speechSynthesis.speak(utterThis)
}

export { initLanguages, spellText, translateText }
