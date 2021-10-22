const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = new http.Server(server);

app.get('/', (req, res) => {
      res.send('Hello world');
});

io.on('connection', (socket) => {
    console.log('user connected');
});

server.listen(3000, () => {  
    console.log('listening on *:3000');
});