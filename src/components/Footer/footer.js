import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './footer.css'
function Footer() {
  return (
    <div id='footer'>
        <div className="credit">
            <p>This Website was created by IEEE SB NITD{`(WEBD Team 22-26)`}</p>
        </div>
        <div className="whatsapp">
            <p>Join our official freshmen group <a href='#'>here</a></p>
            <hr />
        </div>
        <div className="social">
        <p>Get in touch with us</p>
        <SocialIcon className='icon' url="https://twitter.com" bgColor='#150E56'/>
        <SocialIcon className='icon' url="https://instagram.com" bgColor='#150E56'/>
        <SocialIcon className='icon' url="https://facebook.com" bgColor='#150E56'/>
        <SocialIcon className='icon' url="https://linkedin.com" bgColor='#150E56'/>
        </div>
    </div>
  )
}

export default Footer
