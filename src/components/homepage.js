import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Nav/navbar.js'
import Footer from './Footer/footer.js'
import AOS from 'aos'
import drone from './drone_cursor.png'
import 'aos/dist/aos.css'

function Homepage() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 50,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "yellow",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    React.useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='page'>
            <motion.img
                className='cursor'
                variants={variants}
                animate={cursorVariant}
                src={drone} alt=""
            />
            <Navbar />
            <div className='MainPage '>
                <div id="home">
                    <h1 className="typing-demo">IEEE PRESENTS.....</h1>
                    <h2 className='text-shadow'>--Workshop-Name--</h2>
                    <div className="home">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam officiis ipsam? Veritatis rem nobis tempore animi, minus facilis aspernatur ipsam minima. Doloremque cum dolorem cumque enim pariatur, ipsam libero magni repudiandae, quam quidem, explicabo similique quod corporis harum sunt?</p>
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
            <Footer />
        </div>
    )
}

export default Homepage
