const colors = [
  '#400E32',
  '#A61F69',
  '#850000',
  '#662E1C',
  '#DC0000',
  '#3C2A21',
  '#7F167F',
  '#DC3535',
  '#E14D2A',
  '#967E76',
  '#395B64',
  '#3F4E4F',
  '#F15412',
  '#400E32',
  '#A61F69',
  '#850000',
  '#662E1C',
  '#DC0000',
  '#3C2A21',
  '#7F167F',
  '#DC3535',
  '#E14D2A',
  '#967E76',
  '#395B64',
  '#3F4E4F',
  '#F15412'
]

// atribuir o container da letra a variável
const letterConts = document.querySelectorAll('.letter-cont')

// para cada um das divs, executar:
letterConts.forEach((letterCont) => {
  // selecionar um cor baseado no index de array de cores
  const randomIndex = Math.floor(Math.random() * colors.length)
  // atribuir a selação randômica a uma variável
  const randomColor = colors[randomIndex]
  // alterar a propriedade da cor de fundo
  letterCont.style.backgroundColor = randomColor
  // remover a cor escolhida do array confirme o index randômico
  colors.splice(randomIndex, 1)
})
