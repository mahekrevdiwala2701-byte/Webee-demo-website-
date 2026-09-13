import React from 'react'
import './What_we_do2.css'
import what_do2 from '../../assets/whatwedo_about.jpg'
import {motion} from 'framer-motion'

const What_we_do2 = () => {
  return (
    <section id="what2">
      <div className="what_section">
            <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} className="row">
                <div className="col-lg-5 col-sm-12 us_left">
                    <img src={what_do2} alt="" className='what_img'/>
                </div>
                <div className="col-lg-7 col-sm-12 what_text">
                  <h1>What <span className="what_heading">We Do?</span></h1>
                  <hr />
                  <p><span>We are working with clients from India, U.K., Canada, New Zealand, Hong Kong, Singapore , U.A.E. e.t.c. 
                    across verticals like ecommerce, technology, retail and events.</span> From marketing events like Auto Expo - Components 
                    and MTV unplugged to creating some incredible ROAS (Return on ad spends) for ecommerce brands, our team loves to be 
                    creative and strategic about different lines of businesses. We won the 'Best Digital Innovation' award at the ACT summit
                     in Pune where our digital activation campaign for ACMA Safer work-places won accolades from auto component OEMs. We are
                      hungry for creativity and passionate about driving results. Our clients below can attest to our efforts!</p>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default What_we_do2
