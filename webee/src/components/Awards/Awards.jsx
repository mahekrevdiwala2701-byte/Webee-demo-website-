import React from 'react'
import './Awards.css'
import award from '../../assets/award_img.png'
import {motion} from 'framer-motion'

const Awards = () => {
  return (
    <section id="what2">
      <div className="award_Section">
            <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} className="row">
                <div className="col-lg-6 col-sm-12 award_left">
                  <h1>#WeBeeWinning | <span className="award_heading">Our Awards</span></h1>
                  <hr />
                  <p>Over the last five years, we have managed to create and launch a lot of successful and impactful campaigns, some
                     of which also bagged us exciting awards! To begin with, we won an award for the <span>Best Digital Innovation</span> at the ACT 
                     summit 2017 for a gamified VR experience campaign for shop floor safety training, for our client ACMA.</p>
                  <p>Next up, Youth Bol Poll was our first 360 degree campaign for a Non-Profit which gave us an opportunity to bring change 
                    to the society. This campaign helped us bring home the gold at the DIGIXX Awards in the category of Digital Marketing and Excellence 
                    in Charities & Non-Profit. And most recently, we won an award for “The Top 10 Digital Agencies - Independent” at Drivers of Digital 
                    Awards and Summit 2021!</p>
                </div>
                <div className="col-lg-6 col-sm-12 award_right">
                    <img src={award} alt="" className='award_img'/>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Awards
