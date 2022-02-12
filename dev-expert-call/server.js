const express = require("express");
const app = express();
const axios = require("axios");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 9000;
const { v4: uuidv4 } = require("uuid");
const { ExpressPeerServer } = require("peer");
const peer = ExpressPeerServer(server, {
  debug: true,
});
app.use("/peerjs", peer);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(uuidv4());
});
app.get("/:room", (req, res) => {
  console.log(8798798798797979);
  axios
    .get("https://swarnratnaindia.com/dev-apiman/api/question")
    .then((response) => {
      console.log(9999999, response.data);
      res.render("index", { RoomId: req.params.room });
    })
    .catch((err) => {
      console.log(err);
    });
});
io.on("connection", (socket) => {
  socket.on("newUser", (id, RoomId) => {
    socket.join(RoomId);
    socket.to(RoomId).broadcast.emit("userJoined", id);
    socket.on("disconnect", () => {
      socket.to(RoomId).broadcast.emit("userDisconnect", id);
    });
  });
});
server.listen(port, () => {
  console.log("Server running on port : " + port);
});
