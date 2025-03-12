import React from 'react'

export default function Button({title,onclick}) {
  return (
    <button onClick={onclick}>{title}</button>
  )
}