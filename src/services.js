import axios from 'axios'
import { TRANSLATE_API_URL, TRANSLATE_API_OPTIONS } from './constants'

const customAxios = axios.create({
  baseURL: TRANSLATE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

function initLanguages() {
  return customAxios.get('/languages', TRANSLATE_API_OPTIONS)
}

function translateText(data) {
  return customAxios.post('/', data, TRANSLATE_API_OPTIONS)
}

const spellText = (text, language) => {
  const utterThis = new SpeechSynthesisUtterance(text)

  const voice = speechSynthesis
    .getVoices()
    .find((voice) => voice.lang === language)
  utterThis.voice = voice

  speechSynthesis.speak(utterThis)
}

export { initLanguages, translateText, spellText }
