/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */

const operationDisplay = document.getElementById('op-display')
const resultDisplay = document.getElementById('result-display')
let inputBuffer = ''

function appendInput (input) {
  if (
    inputBuffer === '' &&
    (input === '*' || input === '/' || input === '+' || input === '-')
  ) {
    return
  }
  inputBuffer += input
  if (input === '/') {
    operationDisplay.value += ' ÷ '
  } else if (input === '*') {
    operationDisplay.value += ' x '
  } else if (input === '+') {
    operationDisplay.value += ' + '
  } else if (input === '-') {
    operationDisplay.value += ' - '
  } else if (input === '%') {
    if (inputBuffer.length === 1) {
      operationDisplay.value = ''
    } else {
      operationDisplay.value += ' ' + input + ' '
    }
  } else {
    if (
      operationDisplay.value.slice(-1) === '+' ||
      operationDisplay.value.slice(-1) === '-' ||
      operationDisplay.value.slice(-1) === 'x' ||
      operationDisplay.value.slice(-1) === ' ÷ '
    ) {
      operationDisplay.value = operationDisplay.value.slice(0, -1)
    }
    operationDisplay.value += input
  }
  resultDisplay.value = ''
}

function calculateResult () {
  if (
    inputBuffer === '' ||
    inputBuffer.slice(-1) === '+' ||
    inputBuffer.slice(-1) === '-' ||
    inputBuffer.slice(-1) === '*' ||
    inputBuffer.slice(-1) === '/'
  ) {
    return
  }
  try {
    const result = eval(inputBuffer)
    if (Number.isInteger(result)) {
      resultDisplay.value = numberWithCommas(result)
    } else {
      resultDisplay.value = numberWithCommas(result.toFixed(2).replace(/\.?0+$/, ''))
    }
  } catch (error) {
    resultDisplay.value = 'Error'
    console.log(error)
    inputBuffer = ''
    operationDisplay.value = ''
  }
}

function clearAll () {
  inputBuffer = ''
  operationDisplay.value = ''
  resultDisplay.value = ''
}

function clearEntry () {
  if (inputBuffer.slice(-1) === ' ') {
    operationDisplay.value = operationDisplay.value.slice(0, -2)
  }
  inputBuffer = inputBuffer.slice(0, -1)
  resultDisplay.value = ''
}

function toggleSign () {
  if (
    inputBuffer.slice(-1) === '+' ||
    inputBuffer.slice(-1) === '-' ||
    inputBuffer.slice(-1) === '*' ||
    inputBuffer.slice(-1) === '/'
  ) {
    return
  }
  if (inputBuffer === '') {
    return
  }
  if (inputBuffer.slice(0, 1) === '-') {
    inputBuffer = inputBuffer.slice(1)
    operationDisplay.value = operationDisplay.value.slice(1)
  } else {
    inputBuffer = '-' + inputBuffer
    operationDisplay.value = '-' + operationDisplay.value
  }
  resultDisplay.value = ''
}

function calculatePercentage () {
  if (
    inputBuffer === '' ||
    inputBuffer.slice(-1) === '+' ||
    inputBuffer.slice(-1) === '-' ||
    inputBuffer.slice(-1) === '*' ||
    inputBuffer.slice(-1) === '/'
  ) {
    return
  }
  try {
    const percentage = eval(inputBuffer) / 100
    inputBuffer = percentage.toString()
    operationDisplay.value = inputBuffer
    resultDisplay.value = numberWithCommas(inputBuffer)
  } catch (error) {
    resultDisplay.value = 'Error'
    console.log(error)
    inputBuffer = ''
    operationDisplay.value = ''
  }
}

function numberWithCommas (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
