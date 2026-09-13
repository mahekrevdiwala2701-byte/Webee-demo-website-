import React from 'react'
import './What_we_do.css'
import {motion} from 'framer-motion'

const What_we_do = () => {
  return (
    <section id="do">
        <div className='do_section'>   
            <div className="row d-flex">
                <div className="col1 col-lg-4 col-12 text-center">
                    <div className='column1'>
                    <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}}>What we do<span className='q'>?</span></motion.h1>
                    </div>
                </div>
                <div className="col2 col-lg-4 col-12">
                    <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} className='column2'>
                    <h1 className='heading'>Digital.</h1>
                    <hr />
                    <h5>We create super-rich experiences online!</h5>
                    <p>WeBeeSocial is a full-scale Digital Marketing Agency based out of New Delhi, India. We mix our years of experience 
                        and knowledge to create solutions for our clients which are not only performance driven, but also creative.  We are 
                        running kick-ass digital campaigns for our clients, even as you read this!</p>
                        <a href="/"><h1 className='button'>About Us<span>→</span></h1></a>
                    </motion.div>
                </div>
                <div className="col3 col-lg-4 col-12">
                    <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} className='column3'>
                    <h1 className='heading'>And More Digital.</h1>
                    <hr />
                    <h5>Marketing brands with care</h5>
                    <p>What is marketing if it is not performance driven?</p>
                    <p>We create digital experiences which stick with audiences and also reach the end objective. Trust us with making your brand 
                        visible and desired, with highly focused performance marketing.</p>
                    <a href="/"><h1 className='button'>Our Services<span>→</span></h1></a>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default What_we_do
