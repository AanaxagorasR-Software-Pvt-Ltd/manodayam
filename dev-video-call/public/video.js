const _socket = io("/");
let myVideo = document.createElement("video");
myVideo.muted = true;
const videoGrid = document.getElementById("video-grid") 
let videoStream;

const peer = new Peer(undefined, {
    path: "/peerjs",
    host:"/",
    port: 443
});


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(stream => {
    videoStream = stream;
    addVideoStream(myVideo,videoStream)
    
    peer.on('call', (call) => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
        })
    });
    _socket.on('user connected', (userid) => {
        connectNewUser(userid,videoStream)    
    })
})
.catch()
peer.on('open', (id) => {
    _socket.emit('join-room',ROOM__ID,id)
})



const connectNewUser = (userid, videoStream) => {
    console.log('new user ',userid);
    const call = peer.call(userid,videoStream);
    const video = document.createElement("video");
    call.on("stream", userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
}

const addVideoStream  = (video,stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    }) 
    videoGrid.append(video)
}
let message = document.querySelector("#chat_message");

message.addEventListener('keydown', (e) => {
    
    if(e.which === 13 && message.value.length > 0) {
        console.log("message.value",message.value)
        _socket.emit('message', message.value);
        message.value = ""
    }
});
let ulDOM = document.querySelector(".messge");

_socket.on('createMessage', message => {
    console.log(message,'message from server');
    ulDOM.insertAdjacentHTML('beforeend', `<li class="message-li">
    <b> User</b> <br />
    ${message}</li>`);
    scrolltp();
    // ulDOM.appendChild(newDiv)
    // let liElement  = document.createElement(li);
    // ulDOM.appendChild(document.createElement('p'))
})
const scrolltp  = () => {
    let message_win = document.querySelector(".main__chat_window");
    message_win.scrollTop = message_win.scrollHeight;
}
const setMuteMic = () => {
    const html = `
    <i class="mute fa fa-microphone-slash" aria-hidden="true"></i>
    <span> Unmute </span>
    `
    document.querySelector('.mutebnt').innerHTML = html;
}

const setUnMuteMic = () => {
    const html = `
    <i class="fa fa-microphone" aria-hidden="true"></i>
    <span> Mute </span>
    `
    document.querySelector('.mutebnt').innerHTML = html;
}
const muteUnmute = () => {
    const enalbled = videoStream.getAudioTracks()[0].enabled;
    if(enalbled) {
        videoStream.getAudioTracks()[0].enabled = false;
        setMuteMic()
    } else {
        setUnMuteMic()
        videoStream.getAudioTracks()[0].enabled = true;
    }
}
const setPlayVideo = () => {
    const html = `
    <i class="redvideo fas fa-video-slash"></i>
    <span> Start video </span>
    `
    console.log("tests")
    document.querySelector('.videoctl').innerHTML = html;
}
const setStopVideo = () => {
    const html = `
    <i class=" fas fa-video"></i> 
    <span> Stop video </span>
    `
    document.querySelector('.videoctl').innerHTML = html;
}
const stopPlayVideo = () => {
    const enalbled = videoStream.getVideoTracks()[0].enabled;
   console.log('enalbled',enalbled)
    if(enalbled) {
        videoStream.getVideoTracks()[0].enabled = false;
        setPlayVideo()
    } else {
        setStopVideo()
        videoStream.getVideoTracks()[0].enabled = true;
    }
}