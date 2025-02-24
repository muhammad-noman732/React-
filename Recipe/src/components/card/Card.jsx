import React from 'react'
import {  NavLink } from 'react-router-dom';
import './card.css'
function Card(props) {
   
    console.log("recipe id" , props.item.id)
  return (
 
      <div className='recipe-card'>
        <NavLink to={`/recipe/${props.item?.id}`}> 
          <p className='title'>{props.item?.title}</p>
          <img src={props.item?.image} alt={props.item?.title} />
        </NavLink>
      </div>
  )
}

export default Card
