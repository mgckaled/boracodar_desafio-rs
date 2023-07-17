/* eslint-disable no-unused-vars */

// O parseInt() é uma função em JavaScript que converte uma string em um número inteiro. Ele analisa a string fornecida e retorna um valor inteiro com base no conteúdo da string. No caso, ele retorna o número 1, passado como o valor interiro no arquivo .html.

// O método padStart() é uma função disponível em strings JavaScript que adiciona caracteres à esquerda de uma string até que ela atinja um determinado comprimento. Ele é usado principalmente para formatar strings, garantindo que elas tenham um comprimento mínimo desejado, preenchendo os caracteres adicionais com um valor específico.

function increaseCounter() {
  // associar a variavel ao id
  const counter = document.getElementById('counter')
  // associar o valor já transformado em número inteiro
  let value = parseInt(counter.textContent)
  // imcremento
  value++
  // transformar o número inteiro em uma string com um 0 no início
  counter.textContent = value.toString().padStart(2, '0')
}

function decreaseCounter() {
  const counter = document.getElementById('counter')

  let value = parseInt(counter.textContent)
  if (value > 1) {
    value--
    counter.textContent = value.toString().padStart(2, '0')
  }
}
