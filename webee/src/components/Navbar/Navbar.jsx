import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector('.navbar_wrap');
    const dis = document.querySelector('.nav-link-toggle');
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20){
        nav.classList.add('scroll_on');
        dis.classList.add('display');
      }
      else
      {
        nav.classList.remove('scroll_on');
        dis.classList.remove('display');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <nav className={`navbar navbar-expand-xl navbar_wrap`}>
        <div className='header_logo'> 
            <a href="\"><img src={logo} className='navbar_logo'/></a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-stream navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mt-4">
            <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
            </li>            
            <li className='nav-item'><a className="nav-link" href="/About_us">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/Our_Services">Our Services</a></li>
            <li className="nav-item"><a className="nav-link" href="/Our_Work">Our Work</a></li>
            <li className="nav-item"><a className="nav-link" href="/Our_Blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="/Get_in_touch">Get in Touch</a></li>
            <li className="nav-item"><a className="nav-link" href="/Work_with_us">Work With Us</a></li>
            <li className="nav-item"><a className="nav-link nav-link-search" href="/"><i class="fas fa-search"></i></a></li>
            <li className="nav-item nav-link-toggle">
              <button class="border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i class="fas fa-sliders-h"></i>
              </button>

              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">
                  </h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <p>We live by our motto – “We create super-rich experiences online!</p>
                  <p className='mt-4 add'>106 Plot No.7 Sector 22 Dwarka New Delhi 110075</p>
                  <p className='mt-4'>
                    <a href="/">soumya.sharma@webeesocial.com</a><br/>
                    <a href="/">shubhendu.jha@webeesocial.com</a>
                  </p>
                  <div className='icon'>
                    <h1>Follow us</h1>
                    <p><a href="/"><i class="fab fa-twitter"></i></a></p>
                    <p><a href="/"><i class="fab fa-facebook-f"></i></a></p>
                    <p><a href="/"><i class="fab fa-instagram-square"></i></a></p>
                    <p><a href="/"><i class="fab fa-linkedin-in"></i></a></p>
                  </div>
                </div>
              </div>
            </li>
          </ul> 
        </div>
      </nav>
  );
};


export default Navbar


