/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */

const operationDisplay = document.getElementById('op-display')
const resultDisplay = document.getElementById('result-display')
let inputBuffer = ''

function appendInput (input) {
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
    operationDisplay.value += ' ' + input + ' '
  } else {
    operationDisplay.value += input
  }
}

function calculateResult () {
  try {
    const result = eval(inputBuffer)
    if (Number.isInteger(result)) {
      resultDisplay.value = result
    } else {
      resultDisplay.value = result.toFixed(2).replace(/\.?0+$/, '')
    }
  } catch (error) {
    resultDisplay.value = 'Error'
  }
}

function clearAll () {
  inputBuffer = ''
  operationDisplay.value = ''
  resultDisplay.value = ''
}

function clearEntry () {
  inputBuffer = ''
  operationDisplay.value = ''
}

function toggleSign () {
  if (inputBuffer.charAt(0) === '-') {
    inputBuffer = inputBuffer.substring(1)
  } else {
    inputBuffer = '-' + inputBuffer
  }
  operationDisplay.value = inputBuffer
}

function calculatePercentage () {
  resultDisplay.value = eval(inputBuffer) / 100
  operationDisplay.value += ' % '
}
