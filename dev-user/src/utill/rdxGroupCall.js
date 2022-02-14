const globalDataGroupCall = {
  groupCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:1000/manodayam"
      : "https://confrecall.herokuapp.com/",
};
export default globalDataGroupCall;
