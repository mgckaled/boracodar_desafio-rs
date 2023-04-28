const dropZone = document.querySelector('#upload-box')
const fileBox = document.querySelector('#new-file-box')
const fileName = document.querySelector('#file-name')
const uploadSize = document.querySelector('#upload-size')
const progressBar = document.querySelector('.progress')
const uploadPercentage = document.querySelector('#upload-percentage')
const fileInput = document.querySelector('#file-input')

// const svgIconFile = document.querySelector('#icon')
// const fileIconBox = document.querySelector('#icon-file-box')

dropZone.addEventListener('click', selectFile)
dropZone.addEventListener('dragover', handleDragOver)
dropZone.addEventListener('drop', handleFileSelect)

function showFileBox() {
  fileBox.style.display = 'flex'
}

// function handleChangeColorBoxAndIcon () {
//   svgIconFile.src = '../assets/doc-green.svg'
//   fileIconBox.setAttribute('b-color', 'green')
// }

function selectFile() {
  fileInput.click()
}

function handleFileSelect(event) {
  event.stopPropagation()
  event.preventDefault()
  showFileBox()
  const file = event.dataTransfer.files[0]
  fileName.textContent = `${file.name}`
  uploadSize.textContent = `${formatBytes(0)} / ${formatBytes(file.size)}`

  const xhr = new XMLHttpRequest()
  xhr.upload.addEventListener('progress', (event) => {
    const percent = (event.loaded / event.total) * 100
    uploadSize.textContent = `${formatBytes(event.loaded)} / ${formatBytes(file.size)}`
    uploadPercentage.textContent = `${percent.toFixed(0)}%`
    progressBar.style.width = `${percent.toFixed(0)}%`
  })
  xhr.addEventListener('load', () => {})
  // handleChangeColorBoxAndIcon()
}

function handleDragOver(event) {
  event.stopPropagation()
  event.preventDefault()
}

fileInput.addEventListener('change', () => {
  showFileBox()
  const file = fileInput.files[0]
  fileName.textContent = `${file.name}`
  uploadSize.textContent = `${formatBytes(0)} / ${formatBytes(file.size)}`

  const xhr = new XMLHttpRequest()
  xhr.upload.addEventListener('progress', (event) => {
    const percent = (event.loaded / event.total) * 100
    uploadSize.textContent = `${formatBytes(event.loaded)} / ${formatBytes(file.size)}`
    uploadPercentage.textContent = `${percent.toFixed(0)}%`
    progressBar.style.width = `${percent.toFixed(0)}%`
  })
  xhr.addEventListener('load', () => {})
  // handleChangeColorBoxAndIcon()
})

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) {
    return '0 Bytes'
  }
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`
}
