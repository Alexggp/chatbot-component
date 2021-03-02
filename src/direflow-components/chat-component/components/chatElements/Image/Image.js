import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './Image.css';
import Backdrop from '../../ChatContainer/Backdrop/Backdrop';

class Image extends Component {

  constructor(){
    super();
    this.state = {
      fullSize: false
    }
  
  
    this.hideFullSize = () =>{
      this.setState({fullSize: false})
    }
  
    
    this.showFullSize = () =>{
      this.setState({fullSize: true})
    }
  }



  render(){

    const fullSizeImage = (
        <Backdrop 
          fullWindow={true}
          show={this.state.fullSize} 
          clicked={this.hideFullSize}>
            <img className='FullSizeImage' src={this.props.payload.image} alt='' />
        </Backdrop>
    )

    return (
      <React.Fragment>
        <div className='Image' style={this.props.style}>
          <img 
            src={this.props.payload.image} 
            onClick = {this.showFullSize}
            alt='' />
        </div>
        {fullSizeImage}
      </React.Fragment>
  
    )
  }

}

Image.propTypes = {
  payload: PropTypes.object,
  style: PropTypes.object

};


export default withStyles(styles)(Image);