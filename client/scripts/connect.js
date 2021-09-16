let isMobile = false

const url = new URL(window.location.href)
const isNotLocal = url.hostname.search('ngrok.io') >= 0

let serverUrl = 'http://localhost:3333'
let baseUrl = `http://192.168.0.109:5500`

if (isNotLocal) {
  serverUrl = 'https://78a7-45-237-194-7.ngrok.io'
  baseUrl = `http://eea9-45-237-194-7.ngrok.io`
}

const socket = io(serverUrl)

socket.emit('createRoom')

socket.on('roomCreated', roomName => {
  const path = `${baseUrl}/client/public/joinInTheRoom.html?id=${roomName}`

  new QRCode(document.getElementById('qrcode-2'), {
    text: path,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  })
})

socket.on('userIntoInRoom', ({ message }) => {
  console.log({ message })
})
