import { SPELL_LANGUAGES, languageNames } from './constants'
import { initLanguages, translate, spellText } from './services'
import { debounce, getSound } from './utils'

const $ = (selector) => document.querySelector(selector)

const $input = $('#input textarea')
const $output = $('#output textarea')
const $inputLanguages = $('#input-lang')
const $outputLanguages = $('#output-lang')
const $swapLanguagesButton = $('#swap-languages')
const $spellInputButton = $('#spell-input')
const $spellOutputButton = $('#spell-output')

const initApp = () => {
  initLanguages()
    .then((response) => {
      response.data.languages.forEach(({ language }) => {
        const $language = document.createElement('option')
        $language.value = language
        $language.innerText = languageNames.of(language)

        $inputLanguages.appendChild($language)
        $outputLanguages.appendChild($language.cloneNode(true))

        $input.value = localStorage.getItem('input') || ''
        $inputLanguages.value = localStorage.getItem('inputLanguage') || 'es'
        $outputLanguages.value = localStorage.getItem('outputLanguage') || 'en'

        handleTranslate()
      })
    })
    .catch(console.log)
}

const handleChangeLanguage = () => {
  if ($inputLanguages.value === $outputLanguages.value) {
    return handleSwapLanguages()
  }

  localStorage.setItem('inputLanguage', $inputLanguages.value)
  localStorage.setItem('outputLanguage', $outputLanguages.value)

  handleTranslate()
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
  localStorage.setItem('input', $input.value)

  const data = {
    q: $input.value,
    source: $inputLanguages.value,
    target: $outputLanguages.value
  }

  $output.classList.add('translating')

  translate(data)
    .then((response) => {
      $output.value = response.data.data.translations.translatedText
      $output.classList.remove('translating')
    })
    .catch(console.log)
})

const handleSpellInput = () => {
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

  $spellInputButton.classList.add('active')

  spellText(data)
    .then(({ data }) => {
      const sound = getSound(data)
      sound.onended = () => $spellInputButton.classList.remove('active')
      sound.play()
    })
    .catch(console.log)
}

const handleSpellOutput = () => {
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

  $spellOutputButton.classList.add('active')

  spellText(data)
    .then(({ data }) => {
      const sound = getSound(data)
      sound.onended = () => $spellOutputButton.classList.remove('active')
      sound.play()
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
