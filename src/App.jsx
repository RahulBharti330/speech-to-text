import React from "react";
import "./App.css"
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
// import useClipboard from "react-use-clipboard";

const App= () => {
    
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => SpeechRecognition.stopListening()
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
      }


    return (
        <>
            <div className="conatiner">
                <h2>Speech to Text Converter</h2>
                <br />
                <p>React hook that convert speech from the microphone to text and makes it available to your React 
                    components.</p>
                
                <div className="main-content">
                    { transcript }
                </div>

                <div className="btn-style">
                    {/* <button>copy</button> */}
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={stopListening}>Stop Listening</button>
                </div>
            </div>

        </>
    )
}

export default App;