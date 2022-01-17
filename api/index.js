const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
let exec = require('child_process').exec;
const controller = new AbortController();
const { signal } = controller;
const { spawn } = require('child_process');



io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`);
    socket.on('chat message', (msg) => {
        console.log(signal)
        const ls = spawn(`${msg}`,{signal},['-la'] );

        ls.on('error', (err) => {
            console.error('Failed to start subprocess.');
        });
        ls.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        ls.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        ls.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
        controller.abort()
        // exec(`${msg}`,{stdio:[0, 1, 2],cwd: '/'}, (error, stdout, stderr) => {
        //     if (error) {
        //         socket.emit('chat message', `error: ${error.message}`);
        //         return;
        //     }
        //     if (stderr) {
        //         socket.emit('chat message', `stderr: ${stderr}`);
        //         return;
        //     }
        //     socket.emit('chat message', `zsh: ${stdout}`);
        // })
        // console.log('end');

    })

});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(80, () => {
    console.log('listening on 80');
});
