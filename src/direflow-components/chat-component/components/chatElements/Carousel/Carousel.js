import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from'./Carousel.css';
import arrowIcon from '../../../assets/images/arrow-icon.png';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.itemsContainerRef = createRef();
    this.state={
      showLeftArrow: true,
      showRightArrow: true
    }
  
    this.mouseDown= null;
    

  
    this.mouseUpHandler = () =>{
      clearInterval(this.mouseDown);
    }
  
    this.scrollLeftHandler = () =>{
      this.mouseDown = setInterval(()=>{
          this.itemsContainerRef.current.scrollLeft = this.itemsContainerRef.current.scrollLeft - 5;
          if(this.itemsContainerRef.current.scrollLeft <=0 ) {
            this.setState({showLeftArroy: false});
            this.mouseUpHandler(); // mouseUp cause button desapears and mouseUp event deseapears as well
          }
          if(this.itemsContainerRef.current.scrollLeft < this.itemsContainerRef.current.scrollWidth) this.setState({showRightArrow: true})
      },5);
    }
  
    this.scrollRightHandler = () =>{
      this.mouseDown = setInterval(()=>{
        this.itemsContainerRef.current.scrollLeft = this.itemsContainerRef.current.scrollLeft + 5;
        if(this.itemsContainerRef.current.scrollLeft > 0) this.setState({showLeftArroy: true});
        if(this.itemsContainerRef.current.scrollLeft >= this.itemsContainerRef.current.scrollWidth-this.itemsContainerRef.current.clientWidth) {
          this.setState({showRightArrow: false})
          this.mouseUpHandler(); // mouseUp cause button desapears and mouseUp event deseapears as well
        }
      },5);
    }
  }
  
  componentDidMount(){
    if (this.itemsContainerRef.current.scrollWidth>this.itemsContainerRef.current.clientWidth){
      this.setState({showRightArrow: true})
    }
  }


  render(){

    const messageClasses = [
      `${this.props.origin}-message`,
      'Carousel'
    ];

    const leftArrow = (
      <div 
        className={['Arrow', 'ArrowLeft'].join(' ')}
        onMouseDown={this.scrollLeftHandler}
        onMouseUp={this.mouseUpHandler}> 
        <img src={arrowIcon} alt=''/>
      </div>
    )

    const rightArrow = (
      <div 
        className={['Arrow', 'ArrowRight'].join(' ')}
        onMouseDown={this.scrollRightHandler}
        onMouseUp={this.mouseUpHandler}> 
        <img src={arrowIcon} alt=''/>
      </div>
    )

    return (
      <div className={messageClasses.join(' ')} style={this.props.style}>
        {this.state.showLeftArroy ? leftArrow : ''}
        <div className={'ItemsContainer'} ref={this.itemsContainerRef} >
          {this.props.children}
        </div>
        {this.state.showRightArrow ? rightArrow : ''}
      </div>
    )
  }
    
}

Carousel.propTypes = {
  origin: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.array
};

export default withStyles(styles)(Carousel);