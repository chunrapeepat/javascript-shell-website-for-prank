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

server.listen(process.env.PORT, () => console.log('running on port ' + process.env.PORT))