import React, { useState } from 'react'
import './Squard.css'
function Squard({value , onClick}) {
    const [value1, setValue1] = useState(value);
    // console.log(value1);
  const handclick = () => {
    
  }
  return (
 
      <button className='squared' onClick={onClick}>
        <b>{value}</b>
      </button>
    
  )
}

export default Squard
