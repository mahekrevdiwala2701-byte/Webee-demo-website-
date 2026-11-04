import React from 'react'
import './Hero.css'
import line from '../../assets/hero_line.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero">
        <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.5
                }} className=" section_hero">
            <div className='hero_text'>
                <motion.img initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.7
                }} src={line} alt="" style={{height:'1.2rem',width:'6rem'}}/>
                <motion.h1 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.7
                }}>We Create super - rich experiences online!</motion.h1>
                <div className='line2'>
                <motion.img initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.7
                }} src={line} alt="" style={{height:'1.2rem',width:'6rem'}}/>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero