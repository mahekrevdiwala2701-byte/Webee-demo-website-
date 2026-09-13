import React from 'react'
import './Path.css'
import {motion} from 'framer-motion'

const Path = (props) => { 
  return (
    <section id="path">
        <div className='section_path'>
            <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.6}} className="path_text">
                <h1>{props.heading}</h1>
            </motion.div>
        </div>
    </section>
  )
}

export default Path
