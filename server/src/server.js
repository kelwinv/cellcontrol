import express from 'express'
import http from 'http'
import cors from 'cors'

import { Server } from 'socket.io'

import router from './routes.js'

const app = express()

app.use(cors())
app.use(router)

const server = http.createServer(app)

const options = {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
}

const io = new Server(server, options)

const allHosts = []

io.on('connection', socket => {
  socket.on('createRoom', ({ hostName, roomId, baseUrl }) => {
    socket.join(roomId)

    console.log(`> host: ${hostName} created new room in ${baseUrl}`)

    socket.hostName = hostName
    socket.roomId = roomId

    allHosts.push({ hostName, roomId })
  })

  socket.on('joinInRoom', roomId => {
    socket.join(roomId)
    console.log(`> user: ${socket.id} joined in ${roomId}`)

    io.to(roomId).emit('userIntoInRoom')
  })

  socket.on('reeconectIfnotConnected', roomId => {
    if (socket.roomId !== roomId) {
      const host = allHosts.find(socket => socket.roomId === socket.roomId)

      if (!host) return

      socket.hostName = host.hostName
      socket.roomId = host.roomId

      socket.join(roomId)
      console.log(`> host: ${socket.hostName} reconnected in ${socket.roomId}`)
    }
  })

  socket.on('changeColor', (newColor, roomId) => {
    io.to(roomId).emit('newColor', newColor)
  })

  socket.on('sendName', ({ name, room }) => {
    console.log(name)
    io.to(room).emit('newName', name)
  })
})

server.listen(3333, () => {
  console.log(`Listening on port: ${3333}`)
})
