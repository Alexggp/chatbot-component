import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from 'direflow-component';

import classes from './WidgetButton.css';
import { WidgetIcon } from '../../assets/icons';

const widgetButton = (props) => {
  let widget = '';

  if (props.show){
    widget = (
      <div className='WidgetButton' onClick={props.click}>
        <WidgetIcon />
      </div>
    )
  }

  return (
    <Styled styles={classes}>
      {widget}
    </Styled>
  )
}

widgetButton.propTypes = {
  show: PropTypes.bool,
  click: PropTypes.func,
};

export default widgetButton;