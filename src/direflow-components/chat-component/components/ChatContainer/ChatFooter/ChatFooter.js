import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './ChatFooter.css';
import { SendIcon} from '../../../assets/icons';


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
    <div className='ChatFooter'>
      <input 
        type="text"
        placeholder="Escribe algo aquí..."
        onKeyPress={handleKeypress}
        ref={textInput}/>
      <div className='SendButton' onClick={submitHandler}>
        <SendIcon/>
      </div>
    </div>
  )
}
ChatFooter.propTypes = {
  send: PropTypes.func,
};


export default withStyles(styles)(ChatFooter);