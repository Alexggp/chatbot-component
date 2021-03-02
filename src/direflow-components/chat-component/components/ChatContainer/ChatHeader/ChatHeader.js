import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './ChatHeader.css';
import { CloseIcon, WidgetIcon } from '../../../assets/icons';


const ChatHeader = (props) => {

  return (
    <div className='ChatHeader'>
      <div className= 'Logo'>
        <WidgetIcon/>
      </div>
      <div className= 'Title'>
        ChatBot
      </div>
      <div className= 'CloseButton' onClick={props.close}>
        <CloseIcon/>
      </div>
    </div>
  )
}

ChatHeader.propTypes = {
  close: PropTypes.func,
};


export default withStyles(styles)(ChatHeader);