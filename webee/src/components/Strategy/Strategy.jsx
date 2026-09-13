import React from 'react'
import './Strategy.css'
import strategy from '../../assets/strategy.jpg'
import {motion} from 'framer-motion'

const Strategy = () => {
  return (
    <section id="strategy">
        <div className='digital_section'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 digital_right">
                    <motion.img initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}} src={strategy} alt="" className='strategy_img'/>
                </div>
                <div className="col-lg-6 col-md-12 col-12 digital_left">
                    <div className='left_text'>
                        <motion.h1 initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}}>Strategy, Creativity & Results!</motion.h1>
                        <motion.hr initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}}/>
                        <motion.h5 initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.3}}>Our approach is backed by strategy, creativity and optimised for results.</motion.h5>
                        <motion.p initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.5}}>
                            We understand that each client and each project we undertake is different and so we have developed a 
                            repeatable process that we know works. Our methodology puts the user at the heart of the experience from the start. 
                            By working iteratively through a pre-defined set of stages, we create beautiful and usable solutions that work hard
                            and deliver targeted results.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Strategy
