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

// display questions
export async function Question() {
  console.log("fgdfhfdh");
  let questionData = { collectiontypedata: "voice_assessment_question" };
  return axios
    .post("http://localhost:3020/api/voicechat/voice", questionData)
    .then((res) => {
      console.log("====questions====", res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
