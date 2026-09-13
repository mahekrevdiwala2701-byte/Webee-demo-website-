import React from 'react'
import Hero from '../../Hero/Hero'
import What_we_do from '../../What_we_do/What_we_do';
import Img_Slider from '../../Img_Slider/Img_Slider';
import Digital_Solution from '../../Digital_Solution/Digital_Solution';
import Strategy from '../../Strategy/Strategy';
import Our_Clients from '../../Our_Clients/Our_Clients';
import Portfolio from '../../Portfolio/Portfolio'
import Our_News from '../../Our_News/Our_News';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Footer/Footer';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <What_we_do />
      <Img_Slider />
      <Digital_Solution />
      <Strategy />
      <Our_Clients colour="yellow" />
      <Portfolio />
      <Our_News />
      <Reviews />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home



