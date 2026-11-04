import React from 'react'
import design from '../../../../assets/design.png'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'

const Website_Design = () => {
  return (
    <section id="web_des">
        <Navbar />
        <div className="design_section">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 design_left">
                    <h1>Digital Marketing <span>Strategy</span> & Planning <span>Agency</span></h1>
                    <p>Have a look at our most innovative strategies <span><a href="/">here</a></span>!</p>
                    <p>The key to a successful campaign is a well thought-out strategy. The WeBeeSocial Delhi team, with their unmatched 
                        years of experience, create and execute the ideal strategies and plans for your business, keeping in mind the final 
                        outcome and the end goal.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={design} alt="" />
                </div>
            </div>
            <div className='mt-5 design_para mb-5'>
                <p>With any and every strategy that we implement, though, we always aim to grow your brand and increase your revenue. Our approach is equal parts creative and technical, with data playing a key and central role. We focus on helping you realise your digital goals to the fullest, while ensuring that creativity doesn’t get put in the back seat. We truly do love a challenge and while we do let our creative juices flow, we also ensure that the plan we present to you is realistic, achievable and doable. Along with this, we try to create an immersive and unforgettable experience for your audience that is completely unmatched. It doesn’t matter if you’re a startup or a multi-national company - we are confident that our team will provide you with a strategy that will hit your targets bang on!</p>
                <p>Our young, creative, and highly experienced social, design and digital planning teams are brimming with unique ideas that will take your brand and business to the next level. Our website development team ensures that your users have the best experience possible, every single time, and our servicing team ensures that all your needs are met. Along with this, our paid media and business team ensures that the final strategy drives profits and maximises ROI.</p>
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Website_Design