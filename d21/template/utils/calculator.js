// Função para atualizar o preço total
function updateTotalPrice() {
  const itemElements = document.querySelectorAll('.item-cont')
  let totalPrice = 0

  itemElements.forEach((itemElement) => {
    const quantityElement = itemElement.querySelector('.item-qtd-cont #item-quantity')
    const priceElement = itemElement.querySelector('.price-icons-cont #price')

    const quantity = parseInt(quantityElement.textContent.trim())
    const priceText = priceElement.textContent.trim().replace('R$', '').replace('.', '').replace(',', '.')
    const price = parseFloat(priceText)

    const itemTotal = quantity * price
    totalPrice += itemTotal
  })

  const totalElement = document.getElementById('total-price')
  totalElement.innerHTML = `<b>${totalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}</b>`
}

// Adicionar os eventos de clique para os botões de adição e subtração
const plusButtons = document.querySelectorAll('.icon-cont .ph-plus')
const minusButtons = document.querySelectorAll('.icon-cont .ph-minus')

plusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentNode.parentNode.querySelector('#item-quantity')
    const quantity = parseInt(quantityElement.textContent.trim())

    quantityElement.innerHTML = `<p><b>${quantity + 1}</b></p>`
    updateTotalPrice()
  })
})

minusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentNode.parentNode.querySelector('#item-quantity')
    const quantity = parseInt(quantityElement.textContent.trim())

    if (quantity > 1) {
      quantityElement.innerHTML = `<p><b>${quantity - 1}</b></p>`
      updateTotalPrice()
    }
  })
})

updateTotalPrice()
