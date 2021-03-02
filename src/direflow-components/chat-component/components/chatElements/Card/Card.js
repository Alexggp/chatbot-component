import React from 'react';

import classes from './Card.module.css';
import Button from '../Button/Button';

const Card = (props) =>{

    const messageClasses = [
      classes[`${props.origin}-message`],
      classes.Card
    ];

    const clickHandler = (value, action) => {
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
        <div className={classes.Image}>
          <img src={props.payload.image} alt={props.payload.title}/>
        </div>
        <div className={classes.Info}>
          <div className={classes.Title}>
            {props.payload.title}
          </div>
          <div className={classes.Buttons}>
            {buttons}
          </div>
        </div>
      </div>
    )
  
  
}



export default Card;