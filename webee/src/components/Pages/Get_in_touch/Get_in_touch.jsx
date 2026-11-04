import React, { useState } from 'react';
import './Get_in_touch.css';
import map from '../../../assets/map.png'
import map2 from '../../../assets/map2.png'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Path from '../../Path/Path'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import {motion} from 'framer-motion'

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
    budget: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    for (let key in formData) {
      if (!formData[key]) newErrors[key] = 'This field is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted!');
      // here you can send data to your backend
    }
  };

  const map_style={
    paddingTop:"7rem"
  }


  return (
    <>
    <Navbar/>
    <section style={map_style}>
    <Path heading="Get in Touch"/>
    <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{delay:0.5}} className="get-in-touch container py-5">
                <h1 className="title">Coffee or Beer?<span> It's on us!</span></h1>
            <hr />
            <p className="description">
                Social is in our name! We love connecting with people and exchanging thoughts and ideas.
                Please connect with us here or send a three eyed raven. We shall get back to you 🙂
            </p>
            <img src={map} alt="" className='map_img'/>
        <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12 map_text'>
            <h3>Registered Office</h3>
            <p>Plot no.7 Sector 22 Dwarka Delhi, New Delhi, Delhi 110075</p>
            <iframe
            title="Registered Office map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224369.36054363693!2d77.197389!3d28.516529000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1baa5c2ef655%3A0xaae1db6848921c30!2sWeBeeSocial%20India%20%7C%20Creative%20Agency%20New%20Delhi%20%7C%20Digital%20Marketing%20Services%20in%20India!5e0!3m2!1sen!2sin!4v1747902123875!5m2!1sen!2sin"
            width="300"
            height="120"
            style={{ border: 0,paddingBottom:"2rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <img src={map2} alt="" />

            <h3 style={{paddingTop:"1rem"}}>New Delhi (India)</h3>
            <p>Innov8 Old Fort, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, 110017</p>
            <iframe
            title="New Delhi office map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231067.25346233253!2d55.269692!3d25.188858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69122763c955%3A0x212d1a288e7d074b!2sWeBeeSocial!5e0!3m2!1sen!2sin!4v1747902536681!5m2!1sen!2sin"
            width="300"
            height="120"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            <img src={map2} alt="" />


            <h3 style={{paddingTop:"1rem"}}>Dubai (UAE)</h3>
            <p>South Ridge Tower 6, Downtown Dubai, UAE</p>
            <iframe
            title="Dubai office map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231067.25346233253!2d55.269692!3d25.188858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69122763c955%3A0x212d1a288e7d074b!2sWeBeeSocial!5e0!3m2!1sen!2sin!4v1747902536681!5m2!1sen!2sin"
            width="300"
            height="120"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            <img src={map2} alt="" />

            <h3>Toronto (Canada)</h3>
            <p>40 Pintail Crescent, North York, ON M3A 2Y7, Canada</p>
            <iframe
            title="Toronto office map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184376.3500670474!2d-79.33714!3d43.77534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d32026a89213%3A0xa353b6bd8d275663!2sWebeeSocial!5e0!3m2!1sen!2sin!4v1747903011662!5m2!1sen!2sin"
            width="300"
            height="120"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />



        </div>
        <div className='col-lg-9 col-md-10 col-sm-12'>
          <div className='cards'>
            <form className="row g-3 mt-4" onSubmit={handleSubmit} noValidate>
                {[
                { label: 'First Name', name: 'firstName' },
                { label: 'Last Name', name: 'lastName' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Phone Number', name: 'phone' },
                { label: 'Company Name', name: 'company' },
                { label: 'Requirements', name: 'requirements' }
                ].map(({ label, name, type = 'text' }, index) => (
                <div key={index} className={`col-lg-${name === 'requirements' || name === 'company' ? 12 : 6} col-12`}>
                    <label className="form-label">{label}<span className="text-danger">*</span></label>
                    <input
                    type={type}
                    className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors[name]}</div>
                </div>
                ))}

                <div className="col-12">
                <label className="form-label">Budget</label>
                <select
                    className={`form-select ${errors.budget ? 'is-invalid' : ''}`}
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                >
                    <option value="">-select-</option>
                    <option>One Time Project (Not Monthly)</option>
                    <option>INR 50000 to INR 1 Lakh per Month</option>
                    <option>INR 1 Lakh to INR 2 Lakh per Month</option>
                    <option>INR 2 Lakh to INR 5 Lakh per Month</option>
                    <option>Above INR 5 Lakh per Month</option> 
                </select>
                <div className="invalid-feedback">{errors.budget}</div>
                </div>

                <div className="col-12 pb-4">
                <button className="btn btn-primary btn_map" type="submit">Submit</button>
                </div>
            </form>
        </div>
        <div className='pt-4 pb-4 botton_text'>
            <p>Kindly drop an email or fill the form for<span> business enquiries .</span> Our team will call back at the earliest!</p>
            <img src={map} alt="" />
            
        <div className='row mt-3 contact-section'>
            <div className="col-lg-6 col-12 contact-block">
              <h4>For business enquiries:</h4>
              <div className='mail'>
                <i className="far fa-envelope"></i>
                <p>soumya.sharma@webeesocial.com,<br/> shubhendu.jha@webeesocial.com</p>
              </div>
            </div>
          
            <div className="dashed-divider d-none d-lg-block"></div>
            
            <div className="col-lg-6 col-12 contact-block">
              <h4>For job queries:</h4>
              <div className='query'>
                <i className="far fa-envelope"></i>
                <p>hr@webeesocial.com</p>
              </div>
            </div>
        </div>
          </div>

        </div>
        </div>
    </motion.div>
    <ScrollToTop />
    <Footer/>
    </section>
    </>
  );
};

export default GetInTouch;