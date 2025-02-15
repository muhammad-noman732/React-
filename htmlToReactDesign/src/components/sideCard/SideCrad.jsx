import React from 'react'
import { socialLinks } from '../../constant/blog'
import './sideCard.css'

function SideCrad() {
  return (
    <div className='sideCard'>
      <h2 className='title'>Lets Talk</h2>
      <div className="container">
      <p className='description'>Do you want to learn more about how I can help your company overcome problems? Let us have a  conversation.</p>
      <div className='SocialIcons'>
    {
        socialLinks?.map((item , index)=>(
            <a key={index} href={item?.url} target="_blank" rel="noopener noreferrer" className='icons'>
            <item.icon size={30}  />
    </a>
        ))
 }
    </div>
    </div>

   
    </div>
  )
}

export default SideCrad
