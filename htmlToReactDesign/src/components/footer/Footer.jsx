import React from 'react'
import logo from '../../assets/logo-light.svg'
import './footer.css'
function Footer() {
  return (
    <div>
    <div className='footerSection'>
       <div className="logoSection">
        <img src={logo} alt="" width={130} />
        <p className='web'>Learn about Web accessibility, Web performance, and Database management.</p>
       </div>

       <div className="linksSection">
        <h2 className='linkHead'>Quick Links</h2>
        <p className='foterPara'>Advertise with us</p>
        <p className='foterPara'>About Us</p>
        <p className='foterPara'>Contact Us</p>
       </div>
     
       <div className="stuffSection">
       <h2 className='linkHead'>Legal Stuff</h2>
        <p className='foterPara'>Privacy Notice</p>
        <p className='foterPara'>Cookie Policy</p>
        <p className='foterPara'>Terms Of Use</p>
       </div>
   </div>
    <hr />
    <p style={{textAlign:'center' , color:'gray'}}>© Copyright 2024 SimpleBlog</p>
   </div>
  )
}

export default Footer
