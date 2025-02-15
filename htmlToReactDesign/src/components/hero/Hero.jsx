import React from 'react'
import hero from '../../assets/hero.png'
import Button from '../button/Button'
import './hero.css'
function Hero() {
  return (
    <div className='heroSection'>
      <div className='leftSection'>
      <h1 className='topSKill'>Hi,I'm <span className='span'>Julia Walker.</span>  Web Developer</h1>
      <p className='skill'>Specialized in a11y and Core Web Vitals</p>
      <div className="buttonsDIv">
      <Button text = "Contact Me" color="white" bgColor = "rgb(102, 127, 234)"/>
      <Button text = "About Me"   color="rgb(80, 82, 84)" bgColor="rgb(160, 162, 169)"/>
    </div> 
      </div>
      <div className='rightSection'>
        <div className="imgContainer">
          <img src={hero} alt="Author"  width={300} />
        </div>
       
</div>
    </div>
  )
}

export default Hero
