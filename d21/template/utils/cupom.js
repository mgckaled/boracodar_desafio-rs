const cupomLabel = document.getElementById('cupom-label')
const cupomInput = document.getElementById('cupom-input')
const inputXIcon = document.getElementById('input-x-icon')
const customLabel = cupomLabel.innerText

cupomLabel.addEventListener('click', () => {
  cupomLabel.style.display = 'none'
  cupomInput.style.display = 'block'
  cupomInput.focus()
})

cupomInput.addEventListener('blur', () => {
  if (cupomInput.value.length === 12) {
    cupomInput.style.display = 'none'
    cupomLabel.style.display = 'block'
    cupomLabel.innerText = cupomInput.value
  } else {
    cupomInput.blur()
    cupomInput.value = 'min=12 dig.'
  }
})

cupomInput.addEventListener('input', function () {
  if (cupomInput.value.length === parseInt(cupomInput.getAttribute('maxlength'))) {
    inputXIcon.style.display = 'inline-block'
  } else {
    inputXIcon.style.display = 'none'
  }
})

inputXIcon.addEventListener('click', function () {
  cupomInput.value = ''
  cupomLabel.innerText = customLabel
  inputXIcon.style.display = 'none'
})
