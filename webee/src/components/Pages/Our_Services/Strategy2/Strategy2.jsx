import React from 'react'
import Strategy1 from '../../../../assets/strategy1.png'
import Navbar from '../../../Navbar/Navbar'
import { JSAnimation } from 'framer-motion'
import Footer from '../../../Footer/Footer'

const Website_Design = () => {
  return (
    <section id="web_des">
        <Navbar />
        <div className="design_section">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 design_left">
                    <h1>Creative <span>Strategy</span> & Web Graphics<span> Design Agency</span></h1>
                    <p>Check out <span><a href="/">these </a></span>campaign reports to see how we plan, execute & deliver!</p>
                    <p>Creativity truly is the way of life at WeBeeSocial. Every single member of our digital marketing team is picked because they bring that ‘spark’, or if we’re being a little fancy, that je ne sais quoi, to the table.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Strategy1} alt="" />
                </div>
            </div>
            <div className='mt-5 design_para mb-5'>
                <p>Whenever we set out to create something - whether that’s a topical creative or a year-long campaign - we think about the ‘why’ before the ‘how’. This thought process is the reason our clients keep coming back to us for more - we break everything down and look at it from a 360 degree perspective before building it back up, into something bigger and better. When strategizing, we aim to focus on the objectives of each individual campaign before suggesting what will work to achieve the overall desired results. To us, every single element of our campaigns must play two roles flawlessly - they should be both functional and engaging.</p>
                <p>We can also promise you that we’re not just keeping up with the trends, but starting them too! Our team comprises of young, fresh, and creative individuals - and every single of them is a powerhouse of talent. After all, we don’t just believe in giving you the best - we also bring it home. Just have a look at our award winning campaign here! Moreover, our creative agency uses state of the art tools and keeps a tab on the best industry practices so that you always get the desired results - whether that is building your brand from the ground up and making sure that the right people know about it, or encouraging engagement on the optimal platforms to help boost your growth and awareness.</p>
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Website_Design

