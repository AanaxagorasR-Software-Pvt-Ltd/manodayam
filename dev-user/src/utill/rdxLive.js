

const globalDataLive = {
  liveLink:
    window.location.hostname === "localhost"
      ? "http://localhost:4000/manodayam"
      : "https://manodayam-live-session.herokuapp.com/",
};
export default globalDataLive;

