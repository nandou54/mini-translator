import axios from 'axios'
import {
  TRANSLATE_API_URL,
  TRANSLATE_API_OPTIONS,
} from './constants'

function initLanguages() {
  return axios.get(`${TRANSLATE_API_URL}/languages`, TRANSLATE_API_OPTIONS)
}

function translateText(data) {
  return axios.post(TRANSLATE_API_URL, data, TRANSLATE_API_OPTIONS)
}


const spellText = (text, language) => {
  const utterThis = new SpeechSynthesisUtterance(text)

  const voice = speechSynthesis.getVoices().find(voice => voice.lang === language)
  utterThis.voice = voice

  speechSynthesis.speak(utterThis)
}

export { initLanguages, translateText, spellText }
