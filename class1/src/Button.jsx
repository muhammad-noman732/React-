import React from 'react'
import "./button.css"
import { useState } from 'react'

const Button = ({text , onClick}) => {
    
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
