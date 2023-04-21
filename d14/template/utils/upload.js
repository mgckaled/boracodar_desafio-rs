const fileDropzone = document.getElementById('upload-box')
const fileMetadata = document.createElement('div')
fileMetadata.id = 'file-metadata'
fileDropzone.appendChild(fileMetadata)

fileDropzone.addEventListener('dragover', (event) => {
  event.preventDefault()
  fileDropzone.classList.add('hover')
})

fileDropzone.addEventListener('dragleave', () => {
  fileDropzone.classList.remove('hover')
})

fileDropzone.addEventListener('drop', (event) => {
  event.preventDefault()
  fileDropzone.classList.remove('hover')
  const file = event.dataTransfer.files[0]
  displayFileMetadata(file)
})

fileDropzone.addEventListener('click', () => {
  const fileInput = document.createElement('input')
  fileInput.type = 'file'
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0]
    displayFileMetadata(file)
  })
  fileInput.click()
})

function displayFileMetadata (file) {
  const fileName = file.name
  const fileSize = getFileSize(file.size)
  fileMetadata.textContent = `${fileName} (${fileSize})`
}

function getFileSize (size) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let unitIndex = 0
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`
}
