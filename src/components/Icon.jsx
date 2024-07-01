import React from 'react'
import moon from '../assets/img/moon.png';
const Icon = ({icon, width=2}) => {
    
  return (
    <div className={'w-'+width}>
      <img src={moon} />
    </div>
  );
}

export default Icon