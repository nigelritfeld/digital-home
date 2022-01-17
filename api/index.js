const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const { exec, spawn } = require('child_process');



io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`);
    socket.on('chat message', (msg) => {

        exec(`${msg}`,{stdio:[0, 1, 2],cwd: '/'}, (error, stdout, stderr) => {
            if (error) {
                socket.emit('chat message', `error: ${error.message}`);
                return;
            }
            if (stderr) {
                socket.emit('chat message', `stderr: ${stderr}`);
                return;
            }
            socket.emit('chat message', `zsh: ${stdout}`);
        })
        console.log('end');

    })

});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(80, () => {
    console.log('listening on 80');
});
