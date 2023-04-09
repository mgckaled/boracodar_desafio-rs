/* eslint-disable no-unused-vars */

let senha

function togglePassword () {
  document.querySelectorAll('.eye').forEach((eye) => eye.classList.toggle('hide'))

  const type = senha.getAttribute('type') === 'password' ? 'text' : 'password'

  senha.setAttribute('type', type)
}
