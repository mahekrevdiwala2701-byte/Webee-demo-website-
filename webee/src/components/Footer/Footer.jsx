import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_footer.png'
import google_partner from '../../assets/google_partner.png'

const Footer = () => {
  return (
    <section id="footer">
        <div className='footer_section'>
            <div className="row">
                {/* <div className='footer_text'> */}
                    <div className="col-lg-3 col-sm-12 text1">
                        <img src={logo} alt="" className='footer_logo'/>
                        <p>We are a full service creative digital marketing agency based in New Delhi. We combine our years of experience in 
                            creating integrated marketing solutions with creative output to generate a rich digital experience for businesses. 
                            We live by our motto – “We create super-rich experiences online!”</p>
                        <a href="/"><img src={google_partner} alt="" className='partner'/></a>
                    </div>
                    <div className="col-lg-3 col-sm-12 text2">
                        <div>
                            <h1>Registered Office</h1>
                            <p><a href="https://www.google.com/maps/place/WeBeeSocial+India+%7C+Creative+Agency+New+Delhi+%7C+Digital+Marketing+Services+in+India/@28.5292151,77.109557,12z/data=!4m6!3m5!1s0x390d1baa5c2ef655:0xaae1db6848921c30!8m2!3d28.5165294!4d77.1973891!16s%2Fg%2F11sxy9d2hz?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">Plot no.7 Sector 22 Dwarka Delhi, New Delhi, Delhi 110075</a></p>
                        </div>
                        <div>
                            <h1>Registered Office (UAE)</h1>
                            <p><a href="/">Webeesocial Media L.L.C-FZ Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E</a></p>
                        </div>
                        <div>
                            <h1>Our Services</h1>
                            <ul>
                                <li><a href="/">Digital Strategy and Planning</a></li>
                                <li><a href="/">Social Media Marketing</a></li>
                                <li><a href="/">Website Design and Development</a></li>
                                <li><a href="/">SEO and Search Engine Marketing</a></li>
                                <li><a href="/">Web Analytics</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 text3">
                        <div>
                            <h1>Other Offices</h1>
                            <h3 className='mt-4'><a href="/">New Delhi (India)</a></h3>
                            <p><a href="https://www.google.com/maps/place/WeBeeSocial+India+%7C+Creative+Agency+New+Delhi+%7C+Digital+Marketing+Services+in+India/@28.5165294,77.1948142,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1baa5c2ef655:0xaae1db6848921c30!8m2!3d28.5165294!4d77.1973891!16s%2Fg%2F11sxy9d2hz?entry=tts&g_ep=EgoyMDI1MDQwMi4xIPu8ASoASAFQAw%3D%3D&skid=e7c0951b-a8a9-4b5f-8128-5f3a39ff70e8">2nd Floor, Khasra number 261, Plot No. 8, Westend Marg, Saiyad ul Ajaib, Saiyad ul Ajaib, New
                            <br/> Delhi, Delhi 110030</a></p>
                        </div>
                        <div>
                            <h3>Dubai (UAE)</h3>
                            <p><a href="https://www.google.com/maps/place/WeBeeSocial/@25.188858,55.269692,14z/data=!4m6!3m5!1s0x3e5f69122763c955:0x212d1a288e7d074b!8m2!3d25.188858!4d55.2696918!16s%2Fg%2F11qbkrm2d5?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">1102, Clover Bay Tower, Marasi Drive, Business Bay, Dubai, UAE Dubai</a></p>
                        </div>
                        <div>
                            <h3><a href="/">Toronto (Canada)</a></h3>
                            <p><a href="/https://www.google.com/maps/place/WeBeeSocial+%7C+Top+Digital+Marketing+Agency+Toronto/@43.7753403,-79.33714,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d32026a89213:0xa353b6bd8d275663!8m2!3d43.7753403!4d-79.33714!16s%2Fg%2F11fwv15_vh?entry=tts&shorturl=1">2015 Sheppard Ave E, Toronto, ON M2J 0B3, Canada</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 text4">
                        <div>
                            <h1>Connect With Us</h1>
                            <div className='icons d-flex'>
                                <p><a href="https://www.facebook.com/webeesocial/" target='blank'><i class="fab fa-facebook-f"></i></a></p>
                                <p><a href="https://twitter.com/" target='blank'><i className="fab fa-twitter"></i></a></p>
                                <p><a href="https://www.linkedin.com/company/webeesocial/" target='blank'><i class="fab fa-linkedin-in"></i></a></p>
                                <p><a href="https://www.instagram.com/webeesocial/" target='blank'><i class="fab fa-instagram-square"></i></a></p>
                                <p><a href="https://www.youtube.com/channel/UCDT0KsuN4ytOlEwX_tZxAqA"><i class="fab fa-youtube"></i></a></p>
                                <p><a href="https://www.youtube.com/channel/UCDT0KsuN4ytOlEwX_tZxAqA"><i className="fab fa-behance"></i></a></p>
                            </div>
                            <div>
                                <h1>Get in touch</h1> 
                                <p className='email'><i class="fas fa-envelope"></i>Contact us<a href='/'>here</a></p>
                            </div>
                            <div>
                                <h1>Write to us</h1>
                                <p><a href="/">saurav.k@webeesocial.com</a></p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className='copyright'>Webeesocial © 2025. All rights reserved.</p>
                </div>
            </div>
        {/* </div> */}
    </section>
  )
}

export default Footer