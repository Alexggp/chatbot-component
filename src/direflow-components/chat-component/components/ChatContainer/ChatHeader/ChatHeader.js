import React from 'react';

import classes from './ChatHeader.module.css';
import logoImage from '../../../assets/images/widget-img.svg';
import closeImage from '../../../assets/images/close-icon.svg';


const ChatHeader = (props) => {

  return (
    <div className={classes.ChatHeader}>
      <div className= {classes.Logo}>
        <img src={logoImage} alt='ChatBot'/>
      </div>
      <div className= {classes.Title}>
        ChatBot
      </div>
      <div className= {classes.CloseButton} onClick={props.close}>
        <img src={closeImage} alt='Close'/>
      </div>
    </div>
  )
}



export default ChatHeader;