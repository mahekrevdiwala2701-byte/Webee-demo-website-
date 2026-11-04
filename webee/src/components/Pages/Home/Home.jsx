import React from 'react'
import Hero from '../../Hero/Hero'
import WhatWeDo from '../../What_we_do/What_we_do';
import ImgSlider from '../../Img_Slider/Img_Slider';
import DigitalSolution from '../../Digital_Solution/Digital_Solution';
import Strategy from '../../Strategy/Strategy';
import OurClients from '../../Our_Clients/Our_Clients';
import Portfolio from '../../Portfolio/Portfolio'
import OurNews from '../../Our_News/Our_News';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Footer/Footer';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ImgSlider />
      <DigitalSolution />
      <Strategy />
      <OurClients colour="yellow" />
      <Portfolio />
      <OurNews />
      <Reviews />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home