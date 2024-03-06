import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './footer.css'
function Footer() {
  return (
    <div id='footer'>
        <div className="credit">
            <p>This Website was created by IEEE SB NITD</p>
        </div>
        <div className="whatsapp">
            <p>Join our official HackHustle group <a href='https://chat.whatsapp.com/Igp7FdY0vWvCoHjSlkmGRU'>here</a></p>
        </div>
        <div className="social">
        <p>Get in touch with us</p>
        <SocialIcon className='icon' url="https://www.instagram.com/ieeesb_nitdgp?igsh=N3V2ZmkwOGd3Nmhm" bgColor='black'/>
        <SocialIcon className='icon' url="https://facebook.com/groups/ieee.nitdgp/" bgColor='black'/>
        <SocialIcon className='icon' url="https://www.linkedin.com/company/ieeesbnitdgp/" bgColor='black'/>
        </div>
    </div>
  )
}

export default Footer
