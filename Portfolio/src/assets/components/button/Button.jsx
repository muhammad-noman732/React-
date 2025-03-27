import React from 'react'
import './button.css'
function Button(props) {
  return (
    <div >
      <button className='btn'>{props.text}</button>
    </div>
  )
}

export default Button
