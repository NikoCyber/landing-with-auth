export var recValue

function runSpeechRecognition() {
  // new speech recognition object
  // new speech recognition object
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var recognition = new SpeechRecognition()

  // This runs when the speech recognition service starts
  recognition.onstart = function () {
    console.log('We are listening. Try speaking into the microphone.')
  }

  recognition.onspeechend = function () {
    // when user is done speaking
    recognition.stop()
  }

  // start recognition
  recognition.start()

  recValue = recognition
  // This runs when the speech recognition service returns result
  // return new Promise((resolve, reject) => {
  //   resolve(res(), recognition.stop())
  // })
  return new Promise((resolve, reject) => {
    recognition.onresult = function (event) {
      var transcript = event.results[0][0].transcript
      var confidence = event.results[0][0].confidence
      console.log('confidence ->' + confidence)
      resolve(transcript)
    }
  })
}

export default runSpeechRecognition
