import React from 'react'
import './card.css';

function Card(props) {
  return (
    <div className ='card'> 
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      <div className='innerDiv'>
        <p>{props.source } </p>
        <p>{props.language }</p>
        <p>{props.frameWork}</p>
      </div>

      <div className='icons'>
      { props.github && (
            <a href={props.github} target='_blank'  rel="noopener noreferrer" className="link">
               {props.githubIcon}
            </a>
        )}

     {
        props.box &&(
            <a href={props.box} target='_blank'  rel="noopener noreferrer" className="link">
               {props.boxIcon}
            </a>
        )}
      </div>
    </div>
  )
}

export default Card
