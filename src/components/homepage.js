import React from 'react'
import Navbar from './Nav/navbar.js'

function Homepage() {
    return (
        <div>
            <Navbar />
            <div className='MainPage'>
                <h1>Welcome!</h1>
                <div id="home">
                    <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam officiis ipsam? Veritatis rem nobis tempore animi, minus facilis aspernatur ipsam minima. Doloremque cum dolorem cumque enim pariatur, ipsam libero magni repudiandae, quam quidem, explicabo similique quod corporis harum sunt?</p>
                </div>
                <div id="about">
                    <h1>Why you should enroll?</h1>
                    <div className="points">
                        <h3>Sample</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                    </div>
                    <div className="points">
                        <h3>Sample</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                    </div>
                    <div className="points">
                        <h3>Sample</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                    </div>
                    <div className="points">
                        <h3>Sample</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error necessitatibus laboriosam quam quasi dicta nesciunt voluptatibus dolor reprehenderit dolore.</p>
                    </div>
                </div>
                <div id='register'>
                    <h1>Register Now!!</h1>
                    <p>G-form Link</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage
