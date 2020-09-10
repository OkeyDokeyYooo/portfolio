import React from 'react'
import { motion } from 'framer-motion'

import { IconContext } from 'react-icons'
import { IoIosArrowForward, DiBlackberry } from 'react-icons/all' 

const parentVariants = {
    hidden: {
        // WebkitFilter: 'brightness(100%)'
    },
    hover: {
        cursor: 'pointer',
        // scale: 1.05,
        // WebkitFilter: 'brightness(60%)'
    }
}

const childrenVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    hover: {
        opacity: 1,
        y: 0, 
        zIndex: 999,
        transition: {
            type: "spring",
        }
    }
}

const overlayVariants = {
    hidden: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0,
        zIndex: 100,
        display: 'block'
    },
    hover: {
        opacity: 0.7,
    }
}

const aTagVariants = {
    hidden: {

    },
    hover: {

    }
}

const spanVariants = {
    hidden: {

    },
    hover: {
        color: 'black',
        transition: {
            when: 'aft'
        }
    }
}

const Card = ({imgLocation, header, description, website}) => {


    return (
        <motion.div
            id="card"
            variants={parentVariants}
            initial="hidden"
            whileHover="hover"
        >
            <motion.img 
                src={imgLocation} 
                alt="covid19"
            />
            <motion.div 
                variants={overlayVariants}
            ></motion.div>
            <motion.div
                className="project-info"
                variants={childrenVariants}
            >
                <h1>
                    {header}
                </h1>
                <p>
                    {description}
                </p>
                {
                    website && 
                    <a 
                        className="website-button"
                        variants={aTagVariants}
                        without 
                        rel="noopener noreferrer"
                        href={website}
                        target="_blank"
                    >
                        Visit Website
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                            <IoIosArrowForward  size="20px"/>
                        </IconContext.Provider>
                    </a>
                }
            </motion.div>    
        </motion.div>
    )
}


export default Card