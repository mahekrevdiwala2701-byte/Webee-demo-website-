import React from 'react'
import './About.css'
import about_img from '../../assets/About_img.jpg'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section id="about">
        <div className="about_section">
            <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}}
            className="row">
                <div className="col-lg-6 col-sm-12 us_left">
                  <h1>ABOUT <span className="us_text">US</span></h1>
                  <hr  className='us_hr'/>
                  <h5>We live and breathe digital. The Internet is our home.</h5>
                  <p>We are a buzzing digital media agency based out of New Delhi, India. Our team consists of experienced and 
                    hardworking social bees who breathe and live digital. Change on Facebook, Twitter, YouTube, Instagram, Google 
                    algorithm? Rest assured that we are aware of it the moment it’s out. We combine our years of experience in creating 
                    integrated social solutions with creative output to generate a rich digital experience for our clients. We think we research, we create, and for our clients, we thrive to deliver best solutions to their every problem.</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img src={about_img} alt="" className='about_img'/>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default About
