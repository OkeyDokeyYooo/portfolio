import React, {useEffect}from 'react'
import { motion } from 'framer-motion'

import aboutMe from '../images/web development.svg'

const Intro = () => {

    return (
        <section 
            name="intro"
            className="intro"
        >
            <div className="title">
                About Me
            </div>
            <motion.div
                className="left-intro-detail"
            >
                <h1>
                    The best way to predict the future is to invent it.
                </h1>
                <p>
                    Hello, My name is Allen Huang, a Web Developer, and an Computing Science student at Simon Fraser University, Vancouver. 
                    <br/> 
                    <br/> 
                    I specialize in efficient React apps and CSS & HTML that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible.
                    <br/>
                    <br/>
                    Right now, I'm working towards becoming a React senior. In the following years, I also plan to explore the "server-side" more and become a better-rounded full-stack developer.
                </p>
            </motion.div>
            <motion.div
                className="right-intro"
            >
                <img src={aboutMe} alt="about me"/>
            </motion.div>
        </section>

    )
}

export default Intro