const globalDataLive = {
    liveLink:
      window.location.hostname === "localhost"
        ? "http://localhost:4000/manodayam"
        : "http://ec2-3-139-87-143.us-east-2.compute.amazonaws.com/dev-live/",
  };
  export default globalDataLive;
  