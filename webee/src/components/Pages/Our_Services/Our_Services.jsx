import React from 'react'
import './Our_Services.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Cols from './Cols/Cols'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'

const Our_Services = () => {
    let services_style = {
        paddingTop : "6rem"
    }
  return (
    <>
    <Navbar />
    <div style={services_style}>
    <section id="services">
      <div className="services_section">
        <div className="row">
          <div className="col-lg-4 col-12 services_left text-left">
              <div className='services_text'>
                <h1>Our <br/>
                <span>Services</span></h1>
                <hr />
              </div>
          </div> 
          <div className="col-lg-8 col-12 p-0">
              <Cols  
              heading="Digital Strategy and Planning"
              para="“We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue."
              heading2="Creative Strategy and Web Graphics Design"
              para2="“Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or.."
              path1="../Website_design"
              path2="../Strategy2"
              />
            <Cols 
            heading="Social Media Marketing"
            para="“Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels…"
            heading2="Videos, GIFs and Content Marketing"
            para2="“Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos. Videos…"
            path1="../Social_media"
            />
            <Cols 
            heading="Email Marketing"
            para="“We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised. Our creative team designs…"
            heading2="Web Analytics"
            para2="“Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence. Your analytics helps you understand how users…"
            />
            <Cols 
            heading="Media Planning and Buying"
            para="“We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution. These media include websites, apps,…"
            heading2="Shopify Website & Development"
            para2="“Looking for a Shopify website development company? You’ve landed on just the right page!,…"
            />
            
          </div> 
        </div>
      </div>
    </section>
    <Footer />
    </div>
    <ScrollToTop />
    </>
  )
}

export default Our_Services


