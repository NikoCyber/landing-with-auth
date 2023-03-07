'use client'
import runSpeechRecognition, { recValue } from './rec'

export default function page() {
  function runSpeech() {
    runSpeechRecognition().then((i) => console.log('recognized => ' + i))
  }
  s

  return (
    <div className="flex flex-col">
      <button onClick={() => runSpeech()}>Start rec</button>
      <button onClick={() => recValue.stop()}>Stop rec</button>
    </div>
  )
}
