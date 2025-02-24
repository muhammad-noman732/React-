import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  return (
    <div className='card'>
        <NavLink to={'/movie/'+props.item?.id}>
     <img  src={`https://image.tmdb.org/t/p/w500${props.item?.poster_path}`} 
      alt={props.item?.title} 
    />
      <p className='title'>{props.item?.title}</p>
      </NavLink>
    </div>
  )
}

export default Card
