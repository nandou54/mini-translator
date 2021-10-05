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

let inputSound, outputSound
let inputHasChanged = false

const initApp = () => {
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

  $input.value = localStorage.getItem('input') || '¡Introduce un texto y tradúcelo!'
  $inputLanguages.value = localStorage.getItem('inputLanguage') || 'es'
  $outputLanguages.value = localStorage.getItem('outputLanguage') || 'en'
}

const handleChangeLanguage = () => {
  if ($inputLanguages.value === $outputLanguages.value) {
    return handleSwapLanguages()
  }

  localStorage.setItem('inputLanguage', $inputLanguages.value)
  localStorage.setItem('outputLanguage', $outputLanguages.value)
}

const handleSwapLanguages = () => {
  let tempValue = $outputLanguages.value
  $outputLanguages.value = $inputLanguages.value
  $inputLanguages.value = tempValue

  tempValue = $output.value
  $output.value = $input.value
  $input.value = tempValue

  localStorage.setItem('inputLanguage', $inputLanguages.value)
  localStorage.setItem('outputLanguage', $outputLanguages.value)
}

const handleTranslate = debounce(() => {
  localStorage.setItem('input', $outputLanguages.value)
  inputHasChanged = true

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

const playSound = (sound) => {
  const music = new Audio(sound)
  music.play()
}

const handleSpellInput = () => {
  if (!inputHasChanged) return playSound(inputSound)

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
    .then(({ data }) => {
      inputHasChanged = false
      inputSound = data
      playSound(data)
    })
    .catch(console.log)
}

const handleSpellOutput = () => {
  if (!inputHasChanged) return playSound(outputSound)

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
    .then(({ data }) => {
      inputHasChanged = false
      outputSound = data
      playSound(data)
    })
    .catch(console.log)
}

window.addEventListener('load', initApp)
$inputLanguages.addEventListener('change', handleChangeLanguage)
$outputLanguages.addEventListener('change', handleChangeLanguage)
$swapLanguagesButton.addEventListener('click', handleSwapLanguages)
$input.addEventListener('keypress', handleTranslate)
$spellInputButton.addEventListener('click', handleSpellInput)
$spellOutputButton.addEventListener('click', handleSpellOutput)
