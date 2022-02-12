const globalDataGroupCall = {
  groupCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:1000/manodayam"
      : "http://ec2-3-139-87-143.us-east-2.compute.amazonaws.com/dev-live-oneTomany/dev-live-oneTomany",
};
export default globalDataGroupCall;
