// const express = require("express");
// const app = express();
// const server = require("http").Server(app);
// const io = require("socket.io")(server)


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
	debug: true
})
const { v4:uuidv4 } = require("uuid")


app.set('view engine','ejs')
app.use('/peerjs', peerServer);
app.get('/',(req,res) => { 
	res.redirect(`/${uuidv4()}`)
})
app.use(express.static(__dirname + '/public'));
app.get('/:room', (req,res) => {
	//  es.send('hhheloo')
	res.render('room',{ roomid: req.params.room})
}) 

io.on('connection' , socket => {
	socket.on('join-room', (roomid,userid) => {
		console.log("join-room");
		socket.join(roomid);
		socket.to(roomid).emit('user connected',userid)
		socket.on('message', message => {
			io.to(roomid).emit('createMessage',message)
		})
	})
	
})

server.listen(process.env.PORT || 3000,() => console.log("server up and running "))
