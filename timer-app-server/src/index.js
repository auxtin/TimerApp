const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
   cors: {
     origin: 'http://localhost:3000'
   }}
  );
// app.use('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
//   res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
//   next();
// });

// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// app.get('/', (req, res) => {
//   // io.on('connection', (socket) => {
//   //   res.send(`hi from the backend 🍑`);
//   // });
//   // res.send(`hello  from the server realm`);
//   res.sendFile(__dirname + '/index.html');
  
// });

io.on('connection', (socket) => {
  console.log(`${socket.id} has connected 🔌`);
  // socket.join(socket.id);
  // socket.emit('greeting',`The i🆔 is: ${socket.id}`)
  // app.get('/', (req, res) => {
  //   // io.on('connection', (socket) => {
  //   //   res.send(`hi from the backend 🍑`);
  //   // });
  //   // res.send(`hello  from the server realm`);
  //   res.send(socket.id);
  // });
  //   app.get('/*', (req, res) => {
  //     console.log("Hello")
  //   res.send(`hi from the backend 🍑`);
  //   res.send(`hello  from the server realm`);
  //   // res.send(socket.id);
  // });
  socket.on('custom-event',(timer) => {
    console.log(`Customer event hit! 🤣`)
    console.log(timer)
  })
  socket.on('send-timer',(timer) => {
    socket.join("test")
    socket.to("test").emit('share-timer',timer)
    console.log(`Send timer event hit! 🤣`)
    console.log(timer)
  })
  socket.on("join-room", (data) => {
    socket.join(data.room);
    console.log(`${socket.id} has joined ${data.room} room`);
    socket.emit("user-joined", `${socket.id} has joined ${data.room} rooascascsacm`)
    socket.emit("global-clock", data.clockProp)
  });
  socket.on('disconnect', () => {    
    console.log(`${socket.id} disconnected 👋`);
  });
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});