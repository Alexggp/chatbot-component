import React from 'react';
import { withStyles } from 'direflow-component';

import styles from './Spinner.css';


const Spinner = () => {



  return (
    <div className='Spinner'>
      <div className='DotContainer'>
        <div className='Dot'></div>
        <div className='Dot'></div>
        <div className='Dot'></div>
      </div>
    </div>
  )
}



export default withStyles(styles)(Spinner);