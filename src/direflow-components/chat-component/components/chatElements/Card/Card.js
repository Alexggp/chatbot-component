import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './Card.css';
import Button from '../Button/Button';

const Card = (props) =>{

    const messageClasses = [
      `${props.origin}-message`,
      'Card'
    ];

    const clickHandler = (value) => {
      if (value) props.selected(value);
    }

    let buttons = '';

    buttons = props.payload.buttons.map((btn, index) => (
      <Button 
        key={index}
        title= {btn.title}
        value={btn.value} 
        action={btn.action}
        type= {btn.type}
        style= {props.buttonStyle}
        click= {clickHandler}/>
    ))

    return (
      <div className={messageClasses.join(' ')} style={props.style}>
        <div className='Image'>
          <img src={props.payload.image} alt={props.payload.title}/>
        </div>
        <div className='Info'>
          <div className='Title'>
            {props.payload.title}
          </div>
          <div className='Buttons'>
            {buttons}
          </div>
        </div>
      </div>
    )
  
  
}

Card.propTypes = {
  origin: PropTypes.string,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  payload: PropTypes.object,
  selected: PropTypes.func
};


export default withStyles(styles)(Card);