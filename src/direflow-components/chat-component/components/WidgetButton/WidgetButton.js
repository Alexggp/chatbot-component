import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import styles from './WidgetButton.css';
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
    <React.Fragment>
      {widget}
    </React.Fragment>
  )
}

widgetButton.propTypes = {
  show: PropTypes.bool,
  click: PropTypes.func,
};

export default withStyles(styles)(widgetButton);