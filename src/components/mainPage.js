import React from 'react'
import videoBg from './vidBg.mp4';

function MainPage() {
    return (
        <>
            <div className='MainPage '>
                <div id="home">
                    <h1 className="typing-demo">IEEE PRESENTS.....</h1>
                    <h2 className='text-shadow'>-PCB-DECODED 2.0--</h2>
                    <div className="home">
                        <p>Welcome to the fascinating world of circuits! Over the next two days, we'll take a journey through the art of circuits, exploring the fundamental concepts and their impact on the technologies that power our world.</p>
                    </div>
                </div>
            </div>
            <div id="about">
                <h1>FAQs</h1>
                <div className="points" data-aos='fade-left'>
                    <h3>Who can join?</h3>
                    <p>Ans:It would be a great learning experience for all of you irrespective of your branch! It will become the base of designing electrical circuits and help you in building further interesting projects.</p>
                </div>
                <div className="points" data-aos='fade-right'>
                    <h3>Do we need any prerequisites?</h3>
                    <p>Ans: The answer is "NO"! You will be taught everything from scratch and help you learn a lot and experience something amazing.</p>
                </div>
                <div className="points" data-aos='fade-left'>
                    <h3>Why to join the event?</h3>
                    <p>Ans: PCB designing is an integral part of any electronic gadget or robotics. Learning to design a circuit board and  understanding the logic behind it will open up the doors of innovation for you. And most importantly it will be the prerequisite for the upcoming fascinating "DRONE WORKSHOP" event! So register asap. See you in the event!</p>
                </div>
                <div className="points" data-aos='fade-right'>
                    <h3>What  is PCB ?</h3>
                    <p>Ans: PCB is basically the "Printed Circuit Design". With PCB you can design your own simplified and permanent electronic circuit .So come and have a lifetime experience of designing your own first PCB!</p>
                </div>
            </div>
            <div id='register' data-aos="zoom-in">
                <h1>Register Now!!</h1>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe73kFa-uJIaAmQu3LM2P04JczRfkcjMU0nocsWHiEO-4YXYQ/viewform?usp=sf_link"><button>Register!</button></a>
            </div>
        </>
    )
}

export default MainPage
