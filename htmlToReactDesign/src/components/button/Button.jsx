import React from 'react'
import './button.css'

function Button(props) {
  return (
    <div>
      <button style={{color:props.color , backgroundColor:props.bgColor}} className='blogButtons'>{props.text}</button>
    </div>
  )
}

export default Button
