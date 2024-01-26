import React from 'react'

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
                <h1>Why you should enroll?</h1>
                <div className="points" data-aos='fade-left'>
                    <h3>Sample</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                </div>
                <div className="points" data-aos='fade-right'>
                    <h3>Sample</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                </div>
                <div className="points" data-aos='fade-left'>
                    <h3>Sample</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                </div>
                <div className="points" data-aos='fade-right'>
                    <h3>Sample</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                </div>
            </div>
            <div id='register' data-aos="zoom-in">
                <h1>Register Now!!</h1>
                <p>G-form Link</p>
            </div>
        </>
    )
}

export default MainPage
