import React, { Component } from 'react';

import classes from './Image.module.css';
import Backdrop from '../../ChatContainer/Backdrop/Backdrop';

class Image extends Component {

  state = {
    fullSize: false
  }


  hideFullSize = () =>{
    this.setState({fullSize: false})
  }

  
  showFullSize = () =>{
    this.setState({fullSize: true})
  }


  render(){

    const fullSizeImage = (
        <Backdrop 
          fullWindow={true}
          show={this.state.fullSize} 
          clicked={this.hideFullSize}>
            <img className={classes.FullSizeImage} src={this.props.payload.image} alt='' />
        </Backdrop>
    )

    return (
      <React.Fragment>
        <div className={classes.Image} style={this.props.style}>
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



export default Image;