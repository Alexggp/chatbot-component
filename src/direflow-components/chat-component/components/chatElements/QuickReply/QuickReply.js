import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './QuickReply.css';
import Button from '../Button/Button';

class QuickReply extends Component{

  constructor(){
    super();
    this.state={
      disabled: false
    }
  
    this.clickHandler = (value) => {
      if(!this.state.disabled){
  
        this.setState(prevState=>({
          disabled: !prevState.disabled
        }));
        
        if (value) this.props.selected(value);
  
      }
    }
  }
  

  render(){

    const messageClasses = [
      `${this.props.origin}-message`,
      'QuickReply'
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

QuickReply.propTypes = {
  origin: PropTypes.string,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  payload: PropTypes.object,
  selected: PropTypes.func
};

export default withStyles(styles)(QuickReply);