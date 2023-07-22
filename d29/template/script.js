// associar variáveis aos elementos html
const divider = document.querySelector('.divider')
const overlay = document.querySelector('.overlay')
const container = document.querySelector('.container')
let isDragging = false

// Centralizar o divider inicialmente
const initialDividerPosition = container.offsetWidth / 2
divider.style.left = `${initialDividerPosition}px`
overlay.style.clipPath = `polygon(0 0, ${initialDividerPosition}px 0, ${initialDividerPosition}px 100%, 0 100%)`

divider.addEventListener('mousedown', (e) => {
  isDragging = true
})

// movimentar o divider
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return
  let offsetX = e.clientX - container.getBoundingClientRect().left
  offsetX = Math.min(Math.max(0, offsetX), container.offsetWidth)
  divider.style.left = `${offsetX}px`
  overlay.style.clipPath = `polygon(0 0, ${offsetX}px 0, ${offsetX}px 100%, 0 100%)`
})

document.addEventListener('mouseup', () => {
  isDragging = false
})
