import React from 'react'
import './Work_with_us.css'
import Navbar from '../../Navbar/Navbar'
import Path from '../../Path/Path'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import Footer from '../../Footer/Footer'
import mail from '../../../assets/mail.png'

const Work_with_us = () => {
  const work_style ={
    paddingTop:"6rem"
  }
  return (
    <div>
        <Navbar />
        <div style={work_style}>
          <Path heading="Work With Us"/>
          <div className='work_section'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 work_left'>
                 <h1>Our values</h1>
                     <p>At Webeesocial, we are proud of our team and encourage the efforts of all our bees in their achievements throughout their career with us.
                      As a full-service agency, we strengthen ourselves by integrating each team to learn from one another. 
                      As a company, we have 4 specific values that, 
                      we believe represent a successful working strategy: 
                      Taking Ownership, Thinking Smart, Supporting Others and Surprise and Delight. 
                      They are the essence of what we stand for as a company and part of our success are making sure we apply them to our work ethic.</p>

                     <h1>Our Environment</h1>
                      <p>As soon as you walk into our office you will notice the vibrant atmosphere that hits you.
                        As a company, we also want to encourage social awareness
                        and are keen that we give a little back to the society in which we live and work.
                          We endorse our “Bees” to share all ideas and recommendations to help
                         drive the atmosphere in the working environment run smoothly and efficiently.</p>
              </div>

              <div className="dashed-divider d-none d-lg-block"></div>

              <div className='col-lg-6 col-md-12 work_right px-5'>
                <h1>CONTACT OUR HR</h1>
                <div className='mail1 pt-2'>
                  <i className="far fa-envelope" style={{color:"grey",fontSize:"1.5rem"}}></i>
                  <a href="/"><p> hr@webeesocial.com</p></a>
                </div>
                <div className='d-flex gap-4 pt-4 mail2'>
                  <img src={mail} alt="" />
                  <div>
                    <p>For enquiries and applications , please send your resume along with a detailed cover letter at</p>
                    <a href="/"> hr@webeesocial.com</a>
                  </div>
                </div>
                <p className='pt-4'>For WBS CA applications, please send a mail to</p>
                <a href="/">saurav.k@webeesocial.com</a>
              </div>

            </div>
          </div>  
        </div>
        <ScrollToTop />
        <Footer />
    </div>
  )
}

export default Work_with_us


