const url = new URL(window.location.href)
const isNotLocal = url.hostname.search('ngrok.io') >= 0

let serverUrl = 'http://192.168.0.109:3333'

if (isNotLocal) {
  serverUrl = 'https://78a7-45-237-194-7.ngrok.io'
}

const socket = io(serverUrl)

const roomName = url.searchParams.get('id')

socket.emit('joinInRoom', roomName)
