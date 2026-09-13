import React from 'react'
import './Our_News.css'

const Our_News = () => {
  return (
    <section id="news">
        <div className='news_Section'>
            <div className="row text-center">
                <div className="col-12 col-md-6 col-lg-6 col-xxl-4 news1">
                  <h1>Our news
                    <span></span>
                    <span></span>
                    <span></span>
                  </h1>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xxl-4 news2">
                  <div className='news2_text'>
                    <p><a href="/" className='links'>News</a>/ June 25,2020</p>
                    <h2><a href="/">WeBeeSocial wins a Gold at the Digixx 2020</a></h2>
                    <p>WeBeeSocial wins a Gold at the Digixx 2020 YouthBol Poll has struck some gold! Team WeBeeSocial is truly delighted to announce that we have bagged ...</p>
                    <a href="/"><h1 className='button'>READ MORE<span>→</span></h1></a>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xxl-4 news3">
                  <div className='news3_text'>
                    <p><a href="/" className='links'>News</a>/ February 19, 2021</p>
                    <h2><a href="/">WeBeeSocial wins ‘Top 10 Digital Agencies – Independent’ award at DOD 2021</a></h2>
                    <p>WeBeeSocial wins ‘Top 10 Digital Agencies – Independent’ award at Drivers of Digital Awards 2021! We are delighted to announce that WeBeeS...</p>
                    <a href="/"><h1 className='button'>READ MORE<span>→</span></h1></a> 
                  </div>
                </div>
            </div>
        </div>
        <div className='checkout text-center'>
          <a href="/"><h1 className='button'>CHECKOUT OUR BLOG<span>→</span></h1></a>
        </div>
    </section>
  )
}

export default Our_News
