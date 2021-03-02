import React from 'react';

import classes from './TextMessage.module.css';


const TextMessage = (props) => {

  const messageClasses = [
    classes[`${props.origin}-message`],
    classes.TextMessage
  ];

  return (
    <div className={messageClasses.join(' ')} style={props.style}>
      <span dangerouslySetInnerHTML={{__html: props.payload.text}} />
    </div>
  )
}



export default TextMessage;