const globalData = {
  ottLink:
    window.location.hostname === "localhost"
      ? "http://localhost:3002/manodayam/manodayam-ott"
      : "https://swarnratnaindia.com/shakthi-ott/",
};

export default { globalData };
