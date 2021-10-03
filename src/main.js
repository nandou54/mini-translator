import dotenv from 'dotenv'
import qs from 'qs'
import { languageNames } from './constants'
import { initLanguages, translate } from './services'
import { debounce } from './utils'

dotenv.config()

const $ = (selector) => document.querySelector(selector)

const $input = $('#input textarea')
const $output = $('#output textarea')
const $inputLanguages = $('#input-lang')
const $outputLanguages = $('#output-lang')
const $swapLanguagesButton = $('#swap-languages')

window.addEventListener('load', () => {
  initLanguages()
    .then((response) => {
      response.data.data.languages.forEach(({ language }) => {
        const $language = document.createElement('option')
        $language.value = language
        $language.innerText = languageNames.of(language)

        $inputLanguages.appendChild($language)
        $outputLanguages.appendChild($language.cloneNode(true))
      })
    })
    .catch(console.log)

  $inputLanguages.value = 'es'
  $outputLanguages.value = 'en'
})

$input.addEventListener(
  'keypress',
  debounce((e) => {
    const data = qs.stringify({
      q: $input.value,
      source: $inputLanguages.value,
      target: $outputLanguages.value
    })

    translate(data)
      .then((response) => {
        $output.value = response.data.data.translations[0].translatedText
      })
      .catch(console.log)
  })
)

$swapLanguagesButton.addEventListener('click', () => {
  let tempValue = $outputLanguages.value
  $outputLanguages.value = $inputLanguages.value
  $inputLanguages.value = tempValue

  tempValue = $output.value
  $output.value = $input.value
  $input.value = tempValue
})
