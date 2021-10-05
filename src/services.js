import axios from 'axios'
import {
  TRANSLATE_API_URL,
  SPELL_API_URL,
  TRANSLATE_API_OPTIONS,
  SPELL_API_OPTIONS
} from './constants'

function initLanguages() {
  return axios.get(`${TRANSLATE_API_URL}/languages`, TRANSLATE_API_OPTIONS)
}

function translate(data) {
  return axios.post(TRANSLATE_API_URL, data, TRANSLATE_API_OPTIONS)
}

function spellText(data) {
  const params = { ...SPELL_API_OPTIONS.params, ...data }
  return axios.post(SPELL_API_URL, {}, { ...SPELL_API_OPTIONS, params })
}

export { initLanguages, translate, spellText }
