function removeTransition(e) {
  if (e.propertyName !== 'transform') return // Pulando os retornos que não são transform
  this.classList.remove('playing')
}

function playSound({ keyCode }) {
  const audio = document.querySelector(`audio[data-key='${keyCode}']`)
  const key = document.querySelector(`.key[data-key='${keyCode}']`)

  if (!audio) return // Validando a ação
  key.classList.add('playing')
  audio.currentTime = 0 // Repetindo o som ao pressionar
  audio.play()
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
