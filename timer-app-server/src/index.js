const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  
});

io.on("connection", (socket) => {
  console.log(`${socket.id} has connected`);
  socket.join(socket.id);
  socket.on('disconnect', () => {    
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});