/* eslint-disable no-unused-vars */

const playlist = ['audio_1.mp3', 'audio_2.mp3', 'audio_3.mp3']
let currentTrackIndex = 0

// localizar elemento de audio e atribuir a uma variável
const audio = document.getElementById('audio-player')
// referenciar botão de play (ícone svg)
const playButton = document.getElementById('play')
// referenciar id da tag <img>
const imgIcon = document.getElementById('img-icon')

// função de começar ou parar música
function playAudio () {
  if (audio.paused) {
    audio.src = `../assets/audio/${playlist[currentTrackIndex]}`
    imgIcon.src = '../assets/icons/pause.svg'
    audio.play()
  } else {
    imgIcon.src = '../assets/icons/play.svg'
    audio.pause()
  }
}

// ir para próxima faixa
function nextTrack () {
  currentTrackIndex++
  if (currentTrackIndex >= playlist.length) {
    currentTrackIndex = 0
  }
  playAudio()
}

// ir para a faixa anterior
function previousTrack () {
  currentTrackIndex--
  if (currentTrackIndex < 0) {
    currentTrackIndex = playlist.length - 1
  }
  playAudio()
}
// voltar 10s da faixa corrente
function skipBackward () {
  audio.currentTime -= 10
}

// adiantar 10s da faixa corrente
function skipForward () {
  audio.currentTime += 10
}

// atribuir ao botão a função acima
playButton.addEventListener('click', playAudio)
