const globalDataGroupCall = {
  groupCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:1000/manodayam"
      : "http://52.15.159.16/manodayam/",
};
export default globalDataGroupCall;
