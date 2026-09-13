import React from 'react'
import './Digital_Solution.css'
import digital from '../../assets/digital.png'
import {motion} from 'framer-motion'

const Digital_Solution = () => {
  return (
    <section id="digital">
        <div className='digital_section'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 digital_left">
                    <div className='left_text'>
                        <motion.h1 initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}}>Integrated Digital Solutions</motion.h1>
                        <motion.hr initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}}/>
                        <motion.h5 initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}}>Insights, Metrics and Analytics - Everything is connected!</motion.h5>
                        <motion.p initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.5}}>
                            In a digital world where everything’s connected, we believe that the approach to digital communications has to be 
                            joined-up too. Our approach combines creativity & technology and blends a diverse range of digital marketing 
                            disciplines — from mobile and responsive web design to search and social media campaigns — all under one roof.
                        </motion.p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 digital_right">
                    <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}} src={digital} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Digital_Solution


