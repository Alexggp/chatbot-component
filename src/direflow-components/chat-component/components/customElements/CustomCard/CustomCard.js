import React from 'react';

import Card from '../../chatElements/Card/Card';

const CustomCard = (props) =>{

  const newCardStyle = {
    backgroundColor: '#9aae04',
  }

  const newButtonStyle = {
    backgroundColor: '#c9bd43',
  }

  const customProps = {
    style: newCardStyle,
    buttonStyle: newButtonStyle,
  }



  const element = React.cloneElement(
    (<Card {...props}/>),
    customProps,
    null
  )


  return (
    <React.Fragment>
      {element}
    </React.Fragment>

  )
  
}

export default CustomCard;