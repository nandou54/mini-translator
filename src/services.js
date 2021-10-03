import axios from 'axios'
import { options, TRANSLATE_API_URL } from './constants'

function initLanguages() {
  return axios.get(`${TRANSLATE_API_URL}/languages`, options)
}

function translate(data) {
  return axios.post(TRANSLATE_API_URL, data, options)
}

export { initLanguages, translate }
