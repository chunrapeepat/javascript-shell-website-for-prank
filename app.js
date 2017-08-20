const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

io.on('connection', (socket) => {
    socket.on('protocol', (msg) => {
        io.sockets.emit('protocol', msg)
    })
})

server.listen(3000, () => console.log('> Application is running on port ' + 3000))
