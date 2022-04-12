(function () {
  let quize = [
    "he how are you",
    "what is problem are you facing",
    "Need any help from ",
    "Due to some reason ",
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
            const audioBlob = new Blob(audioChunks);
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
    await sleep(3000);
    const audio = await recorder.stop();
    console.log("audio", audio);
    // audio.play();
    await sleep(3000);
    if (!it.done) it.next();
  };

  function makeRangeIterator() {
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
  it = makeRangeIterator();

  result = it.next();
  console.log(result);
})();
