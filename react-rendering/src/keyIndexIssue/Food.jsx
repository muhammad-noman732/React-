import React from 'react'

export default function Food({foods}) {
  return (
    <div>
      <ul>
        {foods.map(food=>(<li>{food}</li>)
         
        )}
        
      </ul>
    </div>
  )
}
