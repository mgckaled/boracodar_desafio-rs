window.addEventListener('scroll', function () {
  // associar o id da <section> de terxto a uma variável
  const scrollingText = document.getElementById('scroll-animation')
  // associar a posição do scroll vertical a uma variável
  const scrollPosition = window.scrollY
  // associar a % de rolagem da scroll bar a uma variável
  const scrollPercentage =
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

  // adicionar um translateY() dinâmico aos estilos
  scrollingText.style.transform = 'translateY(' + scrollPosition + 'px)'

  // definer a cor da thumb da scrollbar baseado no % de rolagem
  document.documentElement.style.setProperty(
    '--scrollbar-thumb-color',
    'hsl(' + scrollPercentage + ', 50%, 60%)'
  )
})
