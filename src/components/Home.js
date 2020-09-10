import React, {useEffect}from 'react'
import lottie from "lottie-web"
import { Link } from "react-scroll";
import { motion, useViewportScroll, useTransform} from 'framer-motion'

import Intro from './Intro'
import Project from './Projects'
import Contact from './Contact'
import Resume from '../doc/YiLun_Huang_Resume_Sep_2.pdf'
import growthAnimation from '../images/Growth Animation.json'
import {ReactComponent as Logo} from '../images/logo.svg'

import './Main.css'


const liVariants = {
    hidden: {
        // position: 'relative',
        // display: 'block',
        // color: 'transparent',
        // webkitTextStroke: '1px #fff',
        fontWeight: '900',
        textShadow: 'none',
    },
    hover: {
        textShadow: '3px 3px #ec615b, 6px 6px #5222d0',
        scale: 1.1,
        x: 10
    }
}

const spanVariants = {
    hidden: {
        textShadow: '1px 1px #ec615b, 1px 1px #5222d0'
    },
    animate: {
        textShadow: '3px 3px #ec615b, 6px 6px #5222d0',
        transition: {
            repeat: Infinity, 
            repeatType: 'mirror', 
            duration: 2
        }
    }
}


const Home = () => {

    const {scrollYProgress} = useViewportScroll()

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.72, 0.72])

    useEffect(() => {
        const growth = lottie.loadAnimation({
            container: document.querySelector("#growth-animation"),
            animationData: growthAnimation,
            renderer: "canvas",
            autoplay: true,
            // loop: false,
        })
        growth.setSubframe(false)
    })


    return (
        <motion.div 
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2.2}}
        >
            <div className="sidebar">
                <Logo />
                <motion.ul 
                    className="nav"
                    style={{scale: scale, transformOrigin: 'bottom left'}}
                >
                    <motion.li
                        variants={liVariants}
                        initial="hidden"
                        whileHover="hover"
                    >
                        <Link
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                            ABOUT ME
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariants}
                        initial="hidden"
                        whileHover="hover"               
                    >
                        <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        >
                            PROJECTS
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariants}
                        initial="hidden"
                        whileHover="hover"
                    >
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1500}
                        >
                            CONTACT
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariants}
                        initial="hidden"
                        whileHover="hover"               
                    >
                        <a
                            without 
                            rel="noopener noreferrer"
                            href={Resume}
                            target="_blank"
                        >
                            RESUME
                        </a>
                    </motion.li>
                </motion.ul>
            </div>
            <section
                name="greeting"
                className="greeting-section"
            >
                <div id="growth-animation" />
                <div className="greeting-text">
                    <h1 className="greeting-name">
                        Hey
                        <motion.span 
                            variants={spanVariants}
                            initial="hidden"
                            animate="animate"
                        >
                            ,
                        </motion.span> I'm Allen
                        <motion.span
                            variants={spanVariants}
                            initial="hidden"
                            animate="animate"
                        >
                            .
                        </motion.span>
                    </h1>
                    <h1 className="greeting-detail">
                        I'm a&nbsp;
                        <motion.span
                            variants={spanVariants}
                            initial="hidden"
                            animate="animate"
                        >
                            full-stack web developer.
                        </motion.span>
                    </h1>
                </div>
            </section>
            <Intro />
            <Project />
            <Contact />
        </motion.div>
    )
}

export default Home