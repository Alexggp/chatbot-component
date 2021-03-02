import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './TextMessage.css';


const TextMessage = (props) => {

  const messageClasses = [
    `${props.origin}-message`,
    'TextMessage'
  ];

  return (
    <div className={messageClasses.join(' ')} style={props.style}>
      <span dangerouslySetInnerHTML={{__html: props.payload.text}} />
    </div>
  )
}

TextMessage.propTypes = {
  origin: PropTypes.string,
  style: PropTypes.object,
  payload: PropTypes.object
};

export default withStyles(styles)(TextMessage);