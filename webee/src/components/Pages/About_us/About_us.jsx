import React from 'react'
import './About_us.css'
import Navbar from '../../Navbar/Navbar'
import About from '../../About/About'
import What_we_do2 from '../../What_we_do2/What_we_do2'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import Awards from '../../Awards/Awards'
import Leadership from '../../Leadership/Leadership'
import Our_Clients from '../../Our_Clients/Our_Clients'
import Footer from '../../Footer/Footer'

const About_us = () => {
    let about_style = {
        paddingTop : "8rem"
    }
  return (
    <div>
      <Navbar/>
      <div style={about_style}>
        <About />
        <What_we_do2 />
        <Awards />
        <Leadership />
        <Our_Clients colour="white"/>
        <div className='desc text-center'>
          <h1 className='desc_text'>We live by our motto – “We create super-rich experiences online!”</h1>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}   

export default About_us

