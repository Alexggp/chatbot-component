import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './Backdrop.css';

const backdrop = (props) =>(
  props.show ? 
    <div 
      style={{position: props.fullWindow ? 'fixed' : 'absolute'}}
      className='Backdrop'
      onClick={props.clicked}>
        {props.children}
    </div> 
  : null
);

backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
  fullWindow: PropTypes.bool,
  children: PropTypes.element

};

export default withStyles(styles)(backdrop);