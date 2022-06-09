const globalDataLibraryCall = {
  libraryCallLink:
    window.location.hostname === "localhost"
      ? "http://localhost:1000/manodayam"
      : "https://library-conference-call.herokuapp.com/",
};
export default globalDataLibraryCall;
