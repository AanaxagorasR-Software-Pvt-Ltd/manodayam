import { saveFile } from "./api";

export const wait = (s) => new Promise((rs) => setTimeout(rs, s));

export const runAudio = (isStop) => {
  let isStoped = false
  // put here quize
  let quize = [
    "We welcome you on our Manodyam's holistic online solution on Mental health wellness powered by Artificial intelligence & machine learning, Will like to know few important things about you followed by a self Voice assessment.",
    "Please   share  your  Name ?",
    "Please   share  your  age ?",
    "Please   share   your  gender ?",
    "Would you like to share , How are you feeling today ?",
    "Would you like to Share one good thing which happened in last one week ?",
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
    if(!isStoped) {
      
      const speech = new window.SpeechSynthesisUtterance(text);
      
      const speak  = () => {
        let voices = window.speechSynthesis.getVoices();
        speech.voice = voices[10];
        window.speechSynthesis.speak(speech);
      }

      if (window.speechSynthesis.getVoices().length > 0) {
        speak();
      } else {
        window.speechSynthesis.addEventListener('voiceschanged', speak);
      }
      
    } else{
     
     
     
      window.speechSynthesis.cancel()
   
      quize = []
    }
  };

  const __main = async (w) => {
    saySpeech(w);
    const recorder = await recordAudio();
    recorder.start();
    await sleep(6000);
    const audio = await recorder.stop();
    try {
      const savedFile = await saveFile(audio);
    } catch (e) {
      console.log(`error ${e}`);
    }
    audio.play();
    // end

    console.log("audio", audio, it.done);
    await sleep(6000);
    if (quize.length > 0 && !isStoped) {
      it.next();
    } else {
      // let rest = confirm(
      //   saySpeech(
      //     "Did you answer questions to your satisfaction. Please press YES for us to proceed to Srlf assessment and please press NO if you want to re-run questions again ?"
      //   )
      // );
      let rest = saySpeech(
        "Did you answer questions , to your satisfaction. Please press start ,  Assessment button for us to proceed , to Self assessment and please press  , restart if you want to re-run questions  , again?"
      );

      await sleep(6000);
      let rest1 = document.querySelector("#Myques");
      rest1.click();
      console.log("button under hood");
      if (rest) {
        quize = [
          "We welcome you on our MANODAYAM’s, holistic online solution , on Mental health wellness powered , by Artificial intelligence  , & machine learning , Will like to know few important things , about you followed ,by a self Voice assessment.",
          "Please share your Name ?",
          "Please share your age ?",
          "Please share  your gender ?",
          "Would you like to share , How are you feeling today ?",
          "Would you like to Share , one good thing which , happened in last , one week ?",
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
  return {
    stop() {
      isStoped = true;
      window.speechSynthesis.cancel()
    }
  }

};
