const globalDataCall = {
  videoCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:5000/"
      : "https://swarnratnaindia.com/dev-video-call/",
};

export default globalDataCall;
