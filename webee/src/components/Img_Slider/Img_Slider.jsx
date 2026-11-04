import React from 'react'
import './Img_Slider.css'
import img1 from '../../assets/slider1.jpg'
import rimg1 from '../../assets/slider2.jpg'
import rimg2 from '../../assets/slider3.jpg'
import rimg3 from '../../assets/slider4.jpg'
import rimg4 from '../../assets/slider5.jpg'

const Img_Slider = () => {
  return (
    <section id="img_slider">
        <div className="section_img">
            <div className="row">
  <div className="col-lg-6 col-md-6 col-sm-12 col_left">
    <div className="image-wrapper">
      <img src={img1} alt="" className="img" />
      <div className="img_overlay">Social Media Marketing</div>
    </div>
  </div>

  <div className="col-lg-6 col-md-6 col-sm-12 col_right">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col_right1">
        <div className="image-wrapper">
          <img src={rimg1} alt="" className="img" />
          <div className="img_overlay">Content Marketing</div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col_right2">
        <div className="image-wrapper">
          <img src={rimg2} alt="" className="img" />
          <div className="img_overlay">Performance Ads</div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col_right3">
        <div className="image-wrapper text-center">
          <img src={rimg3} alt="" className="img" />
          <div className="img_overlay">Search Engine Optimization</div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col_right4">
        <div className="image-wrapper">
          <img src={rimg4} alt="" className="img" />
          <div className="img_overlay">Website Development</div>
        </div>
      </div>
    </div>
  </div>
</div>
    
        </div>
    </section>
  )
}

export default Img_Slider