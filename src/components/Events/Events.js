import React from 'react'
import robo from './Robo.jpeg'
import matlab from './matlab.jpeg'
import hack from './hack.jpeg'
import './Events.css'
function Events() {
  return (
    <div className='event'>
        <h1>EVENTS</h1>
      <div className="container">
        <div className="text">
            <h1>RoboVerse</h1>
            <p>Welcome to the Roboverse, where innovation knows no limits. Step into a realm where imagination meets possibility, where we prototype, refine, and test the most intricate robotic algorithms in immersive simulations.</p>
        </div>
        <div className="image">
            <img src={robo} alt="Robo" />
        </div>
      </div>

      <div className="container">
        <div className="image">
            <img src={matlab} alt="Robo" />
        </div>
        <div className="text">
            <h1>Matlab Mastery</h1>
            <p>Unlock the gateway to innovation with MATLAB Mastery. Dive into MATLAB's powerful numerical computing and data analysis capabilities, and harness Simulink's dynamic system simulation tools.</p>
        </div>
      </div>

      <div className="container">
        <div className="text">
            <h1>Hackathon</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo aperiam consectetur error reprehenderit, culpa voluptate quae obcaecati iusto architecto soluta.</p>
        </div>
        <div className="image">
            <img src={hack} alt="Robo" />
        </div>
      </div>
    </div>
  )
}

export default Events
