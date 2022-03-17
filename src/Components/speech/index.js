import {useEffect} from 'react';
import {
    PushToTalkButton,
    BigTranscript,
    ErrorPanel
  } from "@speechly/react-ui";
  import { useSpeechContext } from "@speechly/react-client";
 
  function Speechly(props) {
    const { segment } = useSpeechContext()
  
    useEffect(() => {
      if (segment) {
        // Handle speech segment and make tentative changes to app state
        console.log(segment);
        if (segment.isFinal) {
          // Handle speech segment and make permanent changes to app state
          console.log("✅", segment.words[0].value)
          props.handleCountryChange(segment.words[0].value);
        }
      }
    }, [segment])
    return (
        <>

        <BigTranscript placement="top"/>
        <PushToTalkButton placement="bottom" captureKey=" "/>
        <ErrorPanel placement="bottom"/>
        </>
    );
  }
  
  export default Speechly;