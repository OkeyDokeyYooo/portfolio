import React, {useState} from 'react'
import { motion, AnimatePresence} from 'framer-motion'

const Welcome = () => {

    const [showWelcome, setShowWelcome] = useState(true)

    setTimeout(() => {
      setShowWelcome(false)
    }, 2200)


    return (
        <AnimatePresence>
            {
            showWelcome && 
            <motion.div 
            className="welcome"
            // animate={{ visibility: 'hidden'}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
            >
                <div>
                <motion.div 
                    className="greeting"
                    // initial={{ opacity: 0}}
                    animate={{ opacity: [0, 1, 1, 1, 0], y: [null, -50, -50, -50, -50], scale: [1, 1, 1, 0.9, 20]}}
                    transition={{type: 'tween', times:[0, 1, 1.1, 1.2], duration: 2}}
                >
                    Hello,
                </motion.div>
                <motion.div 
                    className="enjoy"
                    // initial={{ y: 100, opacity: 0}}
                    // animate={{ y: -50, opacity: [1, 1, 0]}}
                    animate={{ opacity: [0, 1, 1, 1, 0], y: [null, -50, -50, -50, -50]}}
                    transition={{ delay: 0.5 , type: 'tween', duration: 1.5, times: [0, 0,5, 1, 1.1]}}
                >
                    Hope you can<br/>enjoy my portfolio.
                </motion.div>
                </div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default Welcome