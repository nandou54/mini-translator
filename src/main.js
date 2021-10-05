import qs from 'qs'
import { SPELL_LANGUAGES, languageNames } from './constants'
import { initLanguages, translate, spellText } from './services'
import { debounce } from './utils'

const $ = (selector) => document.querySelector(selector)

const $input = $('#input textarea')
const $output = $('#output textarea')
const $inputLanguages = $('#input-lang')
const $outputLanguages = $('#output-lang')
const $swapLanguagesButton = $('#swap-languages')
const $spellInputButton = $('#spell-input')
const $spellOutputButton = $('#spell-output')

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

$spellInputButton.addEventListener('click', () => {
  if (!$input.value) {
    return console.log('no hay texto')
  }

  const inputLanguage = $inputLanguages.value
  const language = SPELL_LANGUAGES.find((language) => language.startsWith(inputLanguage))

  if (!language) {
    return console.log('ningún lenguaje para traducir')
  }

  const data = {
    hl: language,
    src: $input.value
  }

  spellText(data)
    .then((response) => {
      const music = new Audio(response.data)
      music.play()
    })
    .catch(console.log)
})

$spellOutputButton.addEventListener('click', () => {
  if (!$output.value) {
    return console.log('no hay texto')
  }

  const outputLanguage = $outputLanguages.value
  const language = SPELL_LANGUAGES.find((language) => language.startsWith(outputLanguage))

  if (!language) {
    return console.log('ningún lenguaje para traducir')
  }

  const data = {
    hl: language,
    src: $output.value
  }

  spellText(data)
    .then((response) => {
      const music = new Audio(response.data)
      music.play()
    })
    .catch(console.log)
})
