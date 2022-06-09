const globalDataCall = {
  videoCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:4000/"
      : "https://doctor-video-call.herokuapp.com/",
};

export default globalDataCall;

