// atribuir variáveis aos IDs dos elementos HTML
const audioPlayer = document.getElementById('audio-player')
const progressBar = document.getElementById('progress-bar')
const pointer = document.getElementById('pointer')

// formatação do tempo - minutos e segundos
const formatTime = (timeInSeconds) => {
  // arrendonda para baixo o tempo em segundos dividido por 60
  const minutes = Math.floor(timeInSeconds / 60)
  // arrendonda para baixo o o resto do tempo com base 60
  const seconds = Math.floor(timeInSeconds % 60)
  // evitar
  if (isNaN(seconds)) {
    return '0:00'
  }

  // retorna {0:00}
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const updateProgressBar = (progress) => {
  // largura interna de um elemento em pixels.
  const progressBarWidth = progressBar.clientWidth
  // referencia a largura interna de um elemento em pixels.
  const pointerWidth = pointer.clientWidth
  // referencia a posição da largura interna de um elemento em pixels.
  const pointerPosition = (progressBarWidth - pointerWidth) * progress

  // define uma formatação com base em 100% a posição da extetenção da largura interna(pixels)
  progressBar.style.width = `${progress * 100}%`
  pointer.style = `${pointerPosition}px`

  // atribuir variáveis aos IDs dos elementos HTML (span)
  const currentTimeDisplay = document.getElementById('current-time')
  const totalTimeDisplay = document.getElementById('total-time')

  // arrendondar para baixo o tempo corrente da faixa de audio
  const currentTime = Math.floor(audioPlayer.currentTime)
  const totalTime = Math.floor(audioPlayer.duration)

  // manipular as propriedades dos elementos conforme a regra de formatação de tempo.
  currentTimeDisplay.textContent = formatTime(currentTime)
  totalTimeDisplay.textContent = formatTime(totalTime)
}

// disparar um evento a cada 250ms para medir a posição de reprodução do áudio
// atualizar a progressão da barra conforme a função que captura as posições (pixels).
audioPlayer.addEventListener('timeupdate', async () => {
  const progress = audioPlayer.currentTime / audioPlayer.duration
  updateProgressBar(progress)
})
