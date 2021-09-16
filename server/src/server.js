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

io.on('connection', socket => {
  socket.on('createRoom', () => {
    const roomName = `room-${socket.id}`

    socket.join(roomName)

    io.to(socket.id).emit('roomCreated', roomName)
  })

  socket.on('joinInRoom', roomName => {
    socket.join(roomName)

    io.to(roomName).emit('userIntoInRoom', {
      message: 'novo usuario entrou na sala'
    })
  })
})

server.listen(3333, () => {
  console.log(`Listening on port: ${3333}`)
})
