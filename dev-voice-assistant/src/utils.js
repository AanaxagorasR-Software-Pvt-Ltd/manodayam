import { saveFile } from "./api";

export const wait = (s) => new Promise((rs) => setTimeout(rs, s));

export const runAudio = () => {
  // put here quize
  let quize = [
    "Hello we are Manodayam Team, How are you ?",
    "I am also fine, What is your name ? ",
    "What is problems are you facing?",
    "How old are you? ",
    "What is your gender?",
  ];
  let it;
  const recordAudio = () =>
    new Promise(async (resolve) => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });
      const start = () => mediaRecorder.start();
      const stop = () =>
        new Promise((resolve) => {
          mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks, {
              type: "audio/mp3",
            });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            const play = () => audio.play();
            resolve({ audioBlob, audioUrl, play });
          });
          mediaRecorder.stop();
        });
      resolve({ start, stop });
    });

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
  const saySpeech = function (text) {
    const speech = new window.SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const __main = async (w) => {
    saySpeech(w);
    const recorder = await recordAudio();
    recorder.start();
    await sleep(5000);
    const audio = await recorder.stop();
    try {
      const savedFile = await saveFile(audio);
    } catch (e) {
      console.log(`error ${e}`);
    }
    audio.play();
    // end

    console.log("audio", audio, it.done);
    await sleep(3000);
    if (quize.length > 0) {
      it.next();
    } else {
      let rest = confirm(saySpeech("wants to Restart ?"));
      if (rest) {
        quize = [
          "Hello we are Manodayam Team, How are you ?",
          "I am also fine, What is your name ?",
          "What is problems are you facing?",
          "How old are you ?",
          "What is your gender?",
        ];
        it.next();
      }
    }
  };
  function InfiniteIterator() {
    const rangeIterator = {
      next() {
        let result;
        __main(quize.shift());
        if (quize.length) {
          result = { value: quize, done: false };
          return result;
        }
        return { value: quize, done: true };
      },
    };
    return rangeIterator;
  }
  it = InfiniteIterator();
  setTimeout(() => {
    it.next();
  }, 1000);
};
