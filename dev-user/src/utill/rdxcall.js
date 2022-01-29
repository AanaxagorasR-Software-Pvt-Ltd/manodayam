const globalDataCall = {
    videoCallLink: window.location.hostname === 'localhost' ? 'http://localhost:5000/' : 'http://ec2-3-139-87-143.us-east-2.compute.amazonaws.com/dev-video-call'

}

export default globalDataCall;