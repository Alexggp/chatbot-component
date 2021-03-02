import React, { Component } from 'react';

import classes from './QuickReply.module.css';
import Button from '../Button/Button';

class QuickReply extends Component{

  state={
    disabled: false
  }

  clickHandler = (value) => {
    if(!this.state.disabled){

      this.setState(prevState=>({
        disabled: !prevState.disabled
      }));
      
      if (value) this.props.selected(value);

    }
  }

  render(){

    const messageClasses = [
      classes[`${this.props.origin}-message`],
      classes.QuickReply
    ];
    const options = this.props.payload.buttons.map((btn, index)=>(
      <Button 
        key={index}
        title= {btn.title}
        value={btn.value} 
        action={btn.action}
        type= {btn.type}
        click= {this.clickHandler}
        style= {this.props.buttonStyle}
        disabled={this.state.disabled} />
    ))

    return (
      <div className={messageClasses.join(' ')} style={this.props.style}>
        {options}
      </div>
    )
  }
  
}



export default QuickReply;