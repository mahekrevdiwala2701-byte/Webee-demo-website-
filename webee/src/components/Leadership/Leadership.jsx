import React from 'react'
import './Leadership.css'
import leader1 from '../../assets/leader1.png'
import leader2 from '../../assets/leader2.png'

const Leadership = () => {
  return (
    <section id="leadership">
        <div className="leadership_section text-center">
            <div className='pt-5'>
                <h1 className='pb-3'>
                The <span className='leadership'>Leadership</span>
                </h1>
                <hr />  
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 leader_text">
                    <p><span>Soumya sharma</span> is the <span>Co-Founder & CEO of WebeeSocial. </span>She also 
                    <span> heads the Creative Department</span> the agency. Before setting up WeBeeSocial, she spearheaded some of the 
                    biggest campaigns for brands like Huawei, Intel, Ford, Dabur etc.</p>
                </div>
                <div className="col-lg-6 col-md-6 col_img">
                    <img src={leader1} alt="" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-6 col-md-6 col_img2">
                    <img src={leader2} alt="" />
                </div>  
                <div className="col-lg-6 col-md-6 leader_text2">
                    <p><span>Shubhendu Jha</span> is the <span>Co-Founder & MD of WebeeSocial. </span>He also 
                    <span> heads the Client Servicing Department </span> of the agency. Being a digitalhead he loves 
                    creativity, not only as a hobby, but as a away of life. Before setting up WeBeeSocial, he was working with brands 
                    like airtel, Dabur, Honda, Adidas etc. which made him proficient in different verticals.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leadership
