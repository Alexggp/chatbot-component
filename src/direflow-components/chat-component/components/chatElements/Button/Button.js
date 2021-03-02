import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './Button.css';


class Button extends Component{
  constructor(){
    super();
    this.state={
      clicked: false
    }
  
    this.clickHandler = () => {
      if(!this.props.disabled){
        this.setState(prevState=>({
          clicked: !prevState.clicked
        }));
        if(this.props.action){
          window.open(this.props.action, '_blank');
        }
        this.props.click(this.props.value);
        
      }
    }
  }
 

  render(){

    const buttonClasses = [
      'Button'
    ];

    if (this.state.clicked){
      buttonClasses.push('ButtonClicked')
    }
    return (
      <div 
        style={this.props.style}
        className={buttonClasses.join(' ')} 
        onClick={this.clickHandler}>
        <span>{this.props.title}</span> 
      </div>
    )
  }
  
}

Button.propTypes = {
  disabled: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string,
  click: PropTypes.func,
  action: PropTypes.string,
  value: PropTypes.string
};


export default withStyles(styles)(Button);