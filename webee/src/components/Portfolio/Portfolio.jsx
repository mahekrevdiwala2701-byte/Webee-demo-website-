import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className="portfolio_section text-center">
          <h1 className='port_text'>Want to check out our portfolio<span>?</span></h1>
          <div className='pt-4'>
            <button className='port_btn'><a href="/">OUR WORK</a></button>
          </div>
      </div>
    </section>
  )
}

export default Portfolio
