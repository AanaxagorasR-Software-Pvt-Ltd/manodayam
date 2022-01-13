const express = require("express");
// const router = express.Router();
// const { getDatabase } = require("../../db/mongo");
const socket = io("/");
const peer = new Peer();
let myVideoStream;
let myId;
var videoGrid = document.getElementById("videoDiv");
var myvideo = document.createElement("video");
myvideo.muted = true;
const peerConnections = {};
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideo(myvideo, stream);
    peer.on("call", (call) => {
      call.answer(stream);
      const vid = document.createElement("video");
      call.on("stream", (userStream) => {
        addVideo(vid, userStream);
      });
      call.on("error", (err) => {
        alert(err);
      });
      call.on("close", () => {
        console.log(vid);
        vid.remove();
      });
      peerConnections[call.peer] = call;
    });
  })
  .catch((err) => {
    alert(err.message);
  });
peer.on("open", (id) => {
  myId = id;
  socket.emit("newUser", id, roomID);
});
peer.on("error", (err) => {
  alert(err.type);
});
socket.on("userJoined", (id) => {
  console.log("new user joined");
  const call = peer.call(id, myVideoStream);
  const vid = document.createElement("video");
  call.on("error", (err) => {
    alert(err);
  });
  call.on("stream", (userStream) => {
    addVideo(vid, userStream);
  });
  call.on("close", () => {
    vid.remove();
    console.log("user disconect");
  });
  peerConnections[id] = call;
});
socket.on("userDisconnect", (id) => {
  if (peerConnections[id]) {
    peerConnections[id].close();
  }
});
function addVideo(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}
const setMuteMic = () => {
  const html = `
    <i class="mute fa fa-microphone-slash" aria-hidden="true"></i>
    <span> Unmute </span>
    `;
  document.querySelector(".mutebnt").innerHTML = html;
};

const setUnMuteMic = () => {
  const html = `
    <i class="fa fa-microphone" aria-hidden="true"></i>
    <span> Mute </span>
    `;
  document.querySelector(".mutebnt").innerHTML = html;
};
const muteUnmute = () => {
  const enalbled = myVideoStream.getAudioTracks()[0].enabled;
  if (enalbled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setMuteMic();
  } else {
    setUnMuteMic();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
};
const setPlayVideo = () => {
  const html = `
    <i class="redvideo fas fa-video-slash"></i>
    <span> Start video </span>
    `;
  console.log("tests");
  document.querySelector(".videoctl").innerHTML = html;
};
const setStopVideo = () => {
  const html = `
    <i class=" fas fa-video"></i> 
    <span> Stop video </span>
    `;
  document.querySelector(".videoctl").innerHTML = html;
};
const stopPlayVideo = () => {
  const enalbled = myVideoStream.getVideoTracks()[0].enabled;
  console.log("enalbled", enalbled);
  if (enalbled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo();
  } else {
    setStopVideo();
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
};
const hello = {
	collectiontypedata  : question_mcq
}
const urlAPI = `http://localhost:3020/api/question/questions`, hello;
app.post(urlAPI, function async(req, res) {
 
  
  
     res.render("ques", { ques: ques });
  
  });

