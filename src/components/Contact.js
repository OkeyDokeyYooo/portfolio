import React, {useState} from 'react'
import UseAnimations from 'react-useanimations';

import { ReactComponent as ContactSVG} from '../images/contact me.svg'
import {ReactComponent as Logo} from '../images/logo.svg'
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'


const Contact = () => {

    return (
        <section
            name="contact"
            className="contact-section"
        >
            <div className="title">
                Contact Me
            </div>
            <div className="contact-svg">
                <ContactSVG />
            </div>
            <div className="contact-detail">
                <p>
                    I'm seeking out opportunities to collaborate with companies and agencies. I want to bring my experience to the table where we can work together to solve problems in a way that optimizes all of our respective experience and knowledge.
                    <br/>
                    <br/>
                    Feel free to reach out through any platforms bellow
                    <br/>
                    <br/>
                    <h6>Allen Huang</h6>
                    <br/>
                    Full-Stack Developer
                    <br/>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=allenhuang1017@outlook.com">allenhuang1017@outlook.com</a>
                </p>
                <div className="social-media">
                    <UseAnimations animation={github} size={56}  autoPlay={true} loop={true} wrapperStyle={{marginRight: '20px', cursor: "pointer"}} onClick={() => {window.open("https://github.com/OkeyDokeyYooo", "_blank")}}/>
                    <UseAnimations animation={linkedin} size={56}  autoPlay={true} loop={true} wrapperStyle={{marginRight: '20px', cursor: "pointer"}} onClick={() => {window.open("https://www.linkedin.com/in/yilunhuang1017", "_blank")}}/>
                    <UseAnimations animation={twitter} size={56}  autoPlay={true} loop={true} wrapperStyle={{marginRight: '20px', cursor: "pointer"}} onClick={() => {window.open("https://twitter.com/OkeyYooo", "_blank")}}/>
                    <UseAnimations animation={instagram} size={56}  autoPlay={true} loop={true} wrapperStyle={{marginRight: '20px', cursor: "pointer"}} onClick={() => {window.open("https://www.instagram.com/huangyilun/?hl=en", "_blank")}}/>
                </div>
            </div>
        </section>
    )
}

export default Contact