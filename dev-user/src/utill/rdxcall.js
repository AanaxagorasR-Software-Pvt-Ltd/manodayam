const globalDataCall = {
  videoCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:5000/"
      : "https://confrecall.herokuapp.com/",
};

export default globalDataCall;
