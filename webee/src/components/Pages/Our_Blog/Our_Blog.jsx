import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './Our_Blog.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import Cards from './Cards/cards'
import Market from '../../../assets/Marketers.webp'
import AI from '../../../assets/AI_Privacy.jpg'
import unmasking from '../../../assets/Unmasking.webp'
import how_much from '../../../assets/How_much.png'
import marketing from '../../../assets/Marketing.jpg'
import tap from '../../../assets/Tap_on.png'
import dating from '../../../assets/Dating app.png'
import demystifying from '../../../assets/Demystifying.jpg'
import Elon from '../../../assets/Elon_musk.jpg'
import meme from '../../../assets/meme.jpg'
import niche from '../../../assets/niche.png'
import AI_digi from '../../../assets/AI_digital.jpg'
import insta from '../../../assets/insta_ads.jpg'

const Our_Blog = () => {
      const [count,setCount] = useState(0);
  return (
    <section id="Our_Blog">
        <Navbar />
        <div className='Blog_section text-center'>
            <motion.h1 initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:0.5}}>Our <span>blogs</span></motion.h1> 
            <div className='row'>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={Market} heading="Dear marketers, AI can do more than just write. Here’s the proof" 
                    para="Remember when Jarvis managed Tony Stark’s schedule and helped him..."
                    date="April 16, 2025" like="20"/>
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1.2}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={AI} heading="AI, PRIVACY LAWS, AND CONSUMER BEHAVIOUR: WHAT’S DRIVING DIGITAL MARKETING IN 2024?" 
                    para="Who would’ve guessed that the so-called Anti-Heroes would steal the..."
                    date="November 26, 2024" like="19" />
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1.4}} className="col-lg-4 col-md-6 col-sm-12 blog">  
                    <Cards image={unmasking} heading="Unmasking the Marketing Genius of Deadpool & Wolverine: Lessons from the Ultimate Anti-Heros"
                    para="Who would’ve guessed that the so-called Anti-Heroes would steal the..."
                    date="August 6, 2024" like="16"/>
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1.6}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={how_much} heading="How Much #momentmarketing Is Too Much Moment Marketing?" 
                    para="How often do you come across trending moments on your..."
                    date="July 6, 2022" like="7"/>
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1.8}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={marketing} heading="6 Marketing Lessons You Can Learn From F.R.I.E.N.D.S." 
                    para="F.R.I.E.N.D.S. – We saw it. And we saw it again. The..."
                    date="June 17, 2022" like="5"/>
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:2}} className="col-lg-4 col-md-6 col-sm-12 blog">  
                    <Cards image={tap} heading="Tap On These Digital Marketing Trends Before You Step Into 2022!"
                    para="As we come to the end of 2021, a year..."
                    date="December 31, 2021" like="3"/>
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:2.2}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={dating} heading="Dating Apps and Marketing –  How You Can “Swipe Right” On Dating Apps For A Perfect Marketing “Match”" 
                    para="Dating Apps and Marketing - How You Can “Swipe Right” On..."
                    date="November 22, 2021" like="9"/>
                </motion.div>
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:2.4}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={demystifying} heading="Demystifying WhatsApp for Business – Conversations to Conversions!" 
                    para="Your customers are on WhatsApp. Are you? Mark Zuckerberg said..."
                    date="July 19, 2021" like="6"/>
                </motion.div>


                {count >= 1 && (
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:0.2}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={Elon} heading="Why Elon Musk is a Social Media Superstar?" 
                    para="Tesla Inc. has a $0 advertising spend (Or so they..."
                    date="July 19, 2021" like="6"/>
                </motion.div>
                )}

                {count >= 1 && (
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:0.4}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={meme} heading="Meme marketing: a trend that can change the digital marketing world!" 
                    para="Meme marketing: a trend that can change the digital marketing..."
                    date="July 19, 2021" like="6"/>
                </motion.div>
                )}

                {count >= 1 && (
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:0.6}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={niche} heading="Niche Marketing: Your Guide To Success" 
                    para="Niche Marketing: Your Guide To Success When it comes to marketing,..."
                    date="July 19, 2021" like="6"/>
                </motion.div>
                )}
                
                {count >= 1 && (
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:0.8}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={AI_digi} heading="AI & Digital Marketing: Creating Data-Driven Strategies" 
                    para="AI & Digital Marketing: Creating Data-Driven Strategies Whenever we think of..."
                    date="July 19, 2021" like="6"/>
                </motion.div>
                )}

                {count >= 1 && (
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1}} className="col-lg-4 col-md-6 col-sm-12 blog">
                    <Cards image={insta} heading="How to generate sales through Instagram ads?" 
                    para="Wait..what? How to generate sales through ads? Aren't ad supposed..."
                    date="July 19, 2021" like="6"/>
                </motion.div>
                )}

            </div>
            
            {count < 1 && (
            <div className='load_more'>
            <button
            className='load'
            onClick={() => setCount(1)}
            >
            SHOW MORE
            </button>
            </div>
            )}

        </div>
        <ScrollToTop />
        <Footer />
    </section>
  )
}

export default Our_Blog


