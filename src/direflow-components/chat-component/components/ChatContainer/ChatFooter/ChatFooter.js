import React, { useRef } from 'react';

import classes from './ChatFooter.module.css';
import sendImage from '../../../assets/images/send-icon.svg';


const ChatFooter = (props) => {

  const textInput = useRef(null);

  const submitHandler = () => {
    const inputText =  textInput.current.value;
    textInput.current.value = '';
    props.send(inputText);
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitHandler();
    }
  };

  return (
    <div className={classes.ChatFooter}>
      <input 
        type="text"
        placeholder="Escribe algo aquí..."
        onKeyPress={handleKeypress}
        ref={textInput}/>
      <div className={classes.SendButton} onClick={submitHandler}>
        <img src={sendImage} alt='Close'/>
      </div>
    </div>
  )
}



export default ChatFooter;