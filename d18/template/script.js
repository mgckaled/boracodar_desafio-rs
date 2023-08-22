const cards = document.querySelectorAll('.card')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let currentCardIndex = 0

function showCard(index) {
  cards.forEach((card) => card.classList.remove('active'))
  cards[index].classList.add('active')
}

prevButton.addEventListener('click', () => {
  currentCardIndex--
  if (currentCardIndex < 0) {
    currentCardIndex = cards.length - 1
  }
  showCard(currentCardIndex)
})

nextButton.addEventListener('click', () => {
  currentCardIndex++
  if (currentCardIndex > cards.length - 1) {
    currentCardIndex = 0
  }
  showCard(currentCardIndex)
})
