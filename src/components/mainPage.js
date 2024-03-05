import React from 'react'
import vec1 from './vec4.jpeg'
import Events from './Events/Events'

function MainPage() {
    return (
        <>
            <div className='MainPage '>
                <div id="home">
                    <h1>HACKHUSTLE</h1>
                    <div className="home">
                        <p>HackHustle is the dynamic event hosted by the IEEE Student Branch, offering an exciting platform for innovation and collaboration. Dive into a world where creativity knows no bounds as participants engage in workshops, competitions, and networking opportunities.</p>
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe73kFa-uJIaAmQu3LM2P04JczRfkcjMU0nocsWHiEO-4YXYQ/viewform?usp=sf_link"><button>Register Now!</button></a>
                </div>
                <div className="vector">
                    <img src={vec1} alt="VECTOR1" />
                </div>
            </div>
            <div id="about">
                <h1>FAQs</h1>
                <div className="points" data-aos='fade-left'>
                    <h3>Who can join?</h3>
                    <p>Ans:It would be a great learning experience for all of you irrespective of your branch! It will become the base of designing robotic software  and help you in building your understanding of cutting-edge technologies.</p>
                </div>
                <div className="points" data-aos='fade-right'>
                    <h3>Do we need any prerequisites?</h3>
                    <p>Ans: The answer is "NO"! You will be taught everything from scratch and help you learn a lot and experience something amazing.</p>
                </div>
                <div className="points" data-aos='fade-left'>
                    <h3>Why to join the event?</h3>
                    <p>Ans: This event will enhance your understanding of the latest design tools in various domains, and the hackathon will help you tackle real-life situations with the help of the finest technologies being used in modern-day industries</p>
                </div>
            </div>
            <Events/>
            <div id='register' data-aos="zoom-in">
                <h1>Register Now!!</h1>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe73kFa-uJIaAmQu3LM2P04JczRfkcjMU0nocsWHiEO-4YXYQ/viewform?usp=sf_link"><button>Register Now!</button></a>
            </div>
        </>
    )
}

export default MainPage
