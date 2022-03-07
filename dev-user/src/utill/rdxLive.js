const globalDataLive = {
    liveLink:
      window.location.hostname === "localhost"
        ? "http://localhost:4000/manodayam"
        : "https://confrecall.herokuapp.com/",
  };
  export default globalDataLive;
  