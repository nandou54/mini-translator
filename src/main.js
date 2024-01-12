import { inject } from '@vercel/analytics'
import { languageNames } from './constants'
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

const initApp = () => {
  initLanguages()
    .then((response) => {
      response.data.data.languages.sort((a, b) =>
        languageNames.of(a.language) > languageNames.of(b.language) ? 1 : -1
      )

      response.data.data.languages.forEach(({ language }) => {
        const $language = document.createElement('option')
        $language.value = language
        $language.innerText = languageNames.of(language)

        $inputLanguages.appendChild($language)
        $outputLanguages.appendChild($language.cloneNode(true))

        $input.value = localStorage.getItem('input') || ''
        $inputLanguages.value = localStorage.getItem('inputLanguage') || 'es'
        $outputLanguages.value = localStorage.getItem('outputLanguage') || 'en'
      })

      handleInputSpellLanguages()
      handleOutputSpellLanguages()
      handleTranslate()
    })
    .catch(console.log)
}

const handleChangeLanguage = () => {
  localStorage.setItem('inputLanguage', $inputLanguages.value)
  localStorage.setItem('outputLanguage', $outputLanguages.value)

  handleInputSpellLanguages()
  handleOutputSpellLanguages()
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

  handleInputSpellLanguages()
  handleOutputSpellLanguages()
}

const handleTranslate = debounce(() => {
  localStorage.setItem('input', $input.value)
  if ($input.value === '') {
    $output.value = ''
    return
  }

  const data = new URLSearchParams({
    q: $input.value,
    source: $inputLanguages.value,
    target: $outputLanguages.value
  })

  $output.classList.add('translating')

  translateText(data)
    .then((response) => {
      $output.value = response.data.data.translations[0].translatedText
    })
    .catch(console.log)
    .finally(() => {
      $output.classList.remove('translating')
    })
})

const handleInputSpellLanguages = () => {
  $spellInputLanguages.innerHTML = ''
  $spellInputLanguages.disabled = true

  const SPELL_LANGUAGES = speechSynthesis.getVoices().map((voice) => voice.lang)
  const languages = SPELL_LANGUAGES.filter((language) =>
    language.startsWith($inputLanguages.value)
  )

  if (!languages.length) {
    const $empty = document.createElement('option')
    $empty.value = ''
    $empty.innerText = 'Lenguaje no disponible'

    $spellInputLanguages.appendChild($empty)
    return
  }

  $spellInputLanguages.disabled = false

  languages.forEach((language) => {
    const spellLanguage = document.createElement('option')
    spellLanguage.value = language
    spellLanguage.innerText = languageNames.of(language)

    $spellInputLanguages.appendChild(spellLanguage)
  })
}

const handleOutputSpellLanguages = () => {
  $spellOutputLanguages.innerHTML = ''
  $spellOutputLanguages.disabled = true

  const SPELL_LANGUAGES = speechSynthesis.getVoices().map((voice) => voice.lang)
  const languages = SPELL_LANGUAGES.filter((language) =>
    language.startsWith($outputLanguages.value)
  )

  if (!languages.length) {
    const $empty = document.createElement('option')
    $empty.value = ''
    $empty.innerText = 'Lenguaje no disponible'

    $spellOutputLanguages.appendChild($empty)
    return
  }

  $spellOutputLanguages.disabled = false

  languages.forEach((language) => {
    const spellLanguage = document.createElement('option')
    spellLanguage.value = language
    spellLanguage.innerText = languageNames.of(language)

    $spellOutputLanguages.appendChild(spellLanguage)
  })
}

const handleSpellInput = () => {
  const language = $spellInputLanguages.value
  if (!$input.value || !language) return

  $spellInputButton.classList.add('active')

  spellText($input.value, language)
}

const handleSpellOutput = () => {
  const language = $spellOutputLanguages.value
  if (!$output.value || !language) return

  $spellOutputButton.classList.add('active')

  spellText($output.value, language)
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
$input.addEventListener('keypress', handleTranslate)
$spellInputButton.addEventListener('click', handleSpellInput)
$spellOutputButton.addEventListener('click', handleSpellOutput)
$copyOutputButton.addEventListener('click', handleCopyOutput)
speechSynthesis.onvoiceschanged = () => {
  handleInputSpellLanguages()
  handleOutputSpellLanguages()
}
