import axios from "axios";
export async function getWeather(city) {
  const weatherResponse = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=647c054a280143f79b500313201411&q=${city}`
  ).catch((err) => {
    console.error("Cannot fetch weather: ", err);
  });

  const jsonResponse = await weatherResponse.json();
  return jsonResponse.current.temp_c;
}
4;
let apiUrl = "";
export async function saveFile(audioObje) {
  console.log(audioObje);
  console.log("fgdfhfdh", audioObje);
  return axios.post("http://localhost:3020/api/voicechat/voice", {
    method: "POST",
    audio_link: audioObje.audioUrl,
    audioBlob: audioObje.audioUrl,
  });

  // const formData = new FormData();
  // blobToBase64(audioObje?.audioBlob).then((base64Data) => {
  //   const file = "data:audio/webm;base64," + base64Data;
  //   console.log("file ", file);
  //   // const formData = new FormData();
  //   // formData.append('file', file);
  //   // return fetch('http://localhost:8080/audioUpload', {
  //   //     method: 'POST',
  //   //     body: formData
  //   // }).then(res => res.json())
  // });
  // formData.append('audio-file', audioObje?.audioBlob,'myfiletosave.wav');
  // return axios.post('http://localhost:3020/api/audioUpload/voicechat', {
  //   method: 'POST',
  //   body: formData,
  //   headers: new Headers({
  //     'enctype': 'multipart/form-data' // the enctype is important to work with multer on the server
  //   })
  // });
}

// export async function Question() {
console.log("fgdfhfdh");

axios
  .get("http://localhost:3020/api/voice-assessment-question")
  .then((response) => {
    console.log(9999999, response.data);
    // document.getElementById("questionss").innerHTML = "hjghjjjjgnvngjgj";
    // document.getElementById("question").innerHTML = `<h3>${response.data[1].ques}</h3>`
    document.getElementById("question").innerHTML =
      response.data.map(getFullName);
    function getFullName(item) {
      console.log(5555, item);
      return [item.ans1].join("");
    }
    res.render("index", { data: response.data });
  })
  .catch((err) => {
    console.log(err);
  });
// }
