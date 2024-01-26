import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Nav/navbar.js'
import Footer from './Footer/footer.js'
import AOS from 'aos'
import drone from './drone_cursor.png'
import 'aos/dist/aos.css'
import MainPage from './mainPage.js';

function Homepage() {
    // const [mousePosition, setMousePosition] = useState({
    //     x: 0,
    //     y: 0
    // });
    // const [cursorVariant, setCursorVariant] = useState("default");


    // useEffect(() => {
    //     const mouseMove = e => {
    //         setMousePosition({
    //             x: e.clientX,
    //             y: e.clientY
    //         })
    //     }

    //     window.addEventListener("mousemove", mouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", mouseMove);
    //     }
    // }, []);

    // const variants = {
    //     default: {
    //         x: mousePosition.x - 75,
    //         y: mousePosition.y - 50,
    //     },
    //     text: {
    //         height: 150,
    //         width: 150,
    //         x: mousePosition.x - 75,
    //         y: mousePosition.y - 75,
    //         backgroundColor: "yellow",
    //         mixBlendMode: "difference"
    //     }
    // }

    // const textEnter = () => setCursorVariant("text");
    // const textLeave = () => setCursorVariant("default");
    React.useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='page'>
            {/* <motion.img
                className='cursor'
                variants={variants}
                animate={cursorVariant}
                src={drone} alt=""
            /> */}
            <Navbar />
            <MainPage/>
            <Footer />
        </div>
    )
}

export default Homepage
