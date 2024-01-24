import { inject } from '@vercel/analytics'
import { LANGUAGE_NAMES } from './constants'
import { initLanguages, spellText, translateText } from './services'
import { debounce } from './utils'

inject()

const $ = (selector) => document.querySelector(selector)

const $input = $('#input textarea')
const $output = $('#output textarea')

const $inputLanguages = $('#input-lang')
const $outputLanguages = $('#output-lang')
const $swapLanguagesButton = $('#swap-languages')

const $spellInputButton = $('#spell-input')
const $spellOutputButton = $('#spell-output')

const $spellInputLanguages = $('#spell-input-lang')
const $spellOutputLanguages = $('#spell-output-lang')
const $copyOutputButton = $('#copy-output')

const onUpdate = (translate = false) => {
  handleInputSpellLanguages()
  handleOutputSpellLanguages()
  if (translate) handleTranslate()
}

const initApp = () => {
  initLanguages().then((languages) => {
    languages.forEach(({ locale, name }) => {
      const $language = document.createElement('option')
      $language.value = locale
      $language.innerText = name

      $inputLanguages.appendChild($language)
      if (locale !== 'auto')
        $outputLanguages.appendChild($language.cloneNode(true))

      $input.value = localStorage.getItem('input') || ''
      $inputLanguages.value = localStorage.getItem('inputLanguage') || 'es'
      $outputLanguages.value = localStorage.getItem('outputLanguage') || 'en'
    })

    onUpdate(true)
  })
}

const handleChangeLanguage = () => {
  localStorage.setItem('inputLanguage', $inputLanguages.value)
  localStorage.setItem('outputLanguage', $outputLanguages.value)

  onUpdate(true)
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

  onUpdate(false)
}

const handleTranslate = debounce(() => {
  localStorage.setItem('input', $input.value)
  if (!$input.value) {
    $output.value = ''
    return
  }

  const data = {
    text: $input.value,
    source: $inputLanguages.value,
    target: $outputLanguages.value
  }

  $output.classList.add('translating')

  translateText(data)
    .then((translation) => {
      $output.value = translation || ''
    })
    .finally(() => {
      $output.classList.remove('translating')
    })
})

const handleInputSpellLanguages = () => {
  $spellInputLanguages.innerHTML = ''
  $spellInputLanguages.disabled = true

  const languages = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.startsWith($inputLanguages.value))

  if (!languages.length) {
    const $empty = document.createElement('option')
    $empty.value = ''
    $empty.innerText = 'Lenguaje no disponible'

    $spellInputLanguages.appendChild($empty)
    return
  }

  languages.forEach((language) => {
    const spellLanguage = document.createElement('option')
    spellLanguage.value = language.name
    spellLanguage.innerText = LANGUAGE_NAMES.of(language.lang)

    $spellInputLanguages.appendChild(spellLanguage)
  })

  $spellInputLanguages.disabled = false
}

const handleOutputSpellLanguages = () => {
  $spellOutputLanguages.innerHTML = ''
  $spellOutputLanguages.disabled = true

  const languages = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.startsWith($outputLanguages.value))

  if (!languages.length) {
    const $empty = document.createElement('option')
    $empty.value = ''
    $empty.innerText = 'Lenguaje no disponible'

    $spellOutputLanguages.appendChild($empty)
    return
  }

  languages.forEach((language) => {
    const spellLanguage = document.createElement('option')
    spellLanguage.value = language.name
    spellLanguage.innerText = LANGUAGE_NAMES.of(language.lang)

    $spellOutputLanguages.appendChild(spellLanguage)
  })

  $spellOutputLanguages.disabled = false
}

const handleSpellInput = () => {
  const languageName = $spellInputLanguages.value
  if (!$input.value || !languageName) return

  $spellInputButton.classList.add('active')

  spellText($input.value, languageName)
}

const handleSpellOutput = () => {
  const languageName = $spellOutputLanguages.value
  if (!$output.value || !languageName) return

  $spellOutputButton.classList.add('active')

  spellText($output.value, languageName)
}

const handleCopyOutput = () => {
  $output.select()
  $output.setSelectionRange(0, 99_999)
  navigator.clipboard.writeText($output.value)
}

window.addEventListener('load', initApp)
$inputLanguages.addEventListener('change', handleChangeLanguage)
$outputLanguages.addEventListener('change', handleChangeLanguage)
$swapLanguagesButton.addEventListener('click', handleSwapLanguages)
$input.addEventListener('keydown', handleTranslate)
$spellInputButton.addEventListener('click', handleSpellInput)
$spellOutputButton.addEventListener('click', handleSpellOutput)
$copyOutputButton.addEventListener('click', handleCopyOutput)
speechSynthesis.onvoiceschanged = () => {
  onUpdate(false)
}
