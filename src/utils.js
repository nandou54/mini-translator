function debounce(func, timeout = 800) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function getSound(sound) {
  return new Audio(sound)
}

export { debounce, getSound }
