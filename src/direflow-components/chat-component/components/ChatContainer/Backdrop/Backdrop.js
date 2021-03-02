import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) =>(
  props.show ? 
    <div 
      style={{position: props.fullWindow ? 'fixed' : 'absolute'}}
      className={classes.Backdrop} 
      onClick={props.clicked}>
        {props.children}
    </div> 
  : null
);

export default backdrop;