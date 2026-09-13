import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './Our_Work.css'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import Sleepji from '../../../assets/Sleepji.png'
import Resmed from '../../../assets/Resmed.png'
import Vi_John from '../../../assets/Vi-John.jpg'
import Nasscom from '../../../assets/Nasscom.jpg'
import Lotus from '../../../assets/Lotus.jpg'
import Lincoln from '../../../assets/Lincoln.jpg'
import BBC_1 from '../../../assets/BBC_1.jpg'
import ACMA_1 from '../../../assets/ACMA_1.jpg'
import Aular from '../../../assets/Aular.jpg'
import AMYR from '../../../assets/AMYR.jpg'
import Oasis from '../../../assets/Oasis.jpg'
import IndiaAI from '../../../assets/IndiaAI.jpg'
import Dusserah from '../../../assets/Dusserah.jpeg'
import Influencer from '../../../assets/Influencer.jpg'
import Search_eng from '../../../assets/Search_eng.jpg'
import Lead_Gem from '../../../assets/Lead_Gem.jpg'
import Graphics from '../../../assets/Graphics.jpg'
import O_1 from '../../../assets/O_1.jpg'
// import O_2 from '../../../assets/O_2.jpg'
import Youth from '../../../assets/Youth.jpg'
import Three from '../../../assets/Three.jpg'
import Mahindra from '../../../assets/Mahindra.jpg'
import Solo_ex from '../../../assets/Solo_ex.png'
import JLF from '../../../assets/JLF.jpg'
import C_360 from '../../../assets/360C.jpg'
import TeamWork_1 from '../../../assets/TeamWork_1.png'
// import ACMA1 from '../../../assets/ACMA1.jpg'
// import Sale_bhai from '../../../assets/Sale_bhai.png'
// import Sale_bhai1 from '../../../assets/Sale_bhai1.jpg'
// import SR from '../../../assets/SR.jpg'
import ReadWhere from '../../../assets/ReadWhere.jpg'
import PSDesign from '../../../assets/PSDesign.png'
import PS2 from '../../../assets/PS2.jpg'
// import PS3 from '../../../assets/PS3.jpg'
// import Political from '../../../assets/Political.jpg'
// import Niryas from '../../../assets/Niryas.jpg'
import Niryas_food from '../../../assets/Niryas_food.jpg'
// import Ministry from '../../../assets/Ministry.jpg'
import LOGO_DES from '../../../assets/LOGO_DES.png'
import LOGO_M from '../../../assets/LOGO_M.jpg'
// import Just_Delhi from '../../../assets/Just_Delhi.jpg'
import Creative from '../../../assets/Creative.jpg'
// import Safer from '../../../assets/Safer.jpg'
// import ACMA from '../../../assets/ACMA$.png'
// import Production from '../../../assets/Production.png'
// import FIRO from '../../../assets/FIRO.png'
// import Genesis from '../../../assets/Genesis.png'
// import { desc, image } from 'framer-motion/client'

const data = [
  {id:1,image:Sleepji,category:"Design",heading:"ResMed – Sleepy Ji",desc:"Design , Digital campaigns , Social Media , Videos"},
  {id:2,image:Vi_John,category:"Design",heading:"Vi-John",desc:"Design , graphics , Social Media"},
  {id:3,image:Nasscom,category:"Design",heading:"Nasscom",desc:"Design , graphics , Performance Marketing"},
  {id:4,image:Lotus,category:"Design",heading:"Lotus Herbals",desc:"Design , Digital campaigns , graphics , Social Media"},
  {id:5,image:Lincoln,category:"Design",heading:"Lincoln University",desc:"Design , graphics , Websites"},
  {id:6,image:ACMA_1,category:"Design",heading:"ACMA",desc:"Design , graphics , Social Media , Websites"},
  {id:7,image:Aular,category:"Design",heading:"EULER",desc:"Design , graphics , Websites"},
  {id:8,image:AMYR,category:"Design",heading:"AMYR",desc:"Design , graphics , Videos , Websites"},
  {id:9,image:Oasis,category:"Design",heading:"Best Oasis",desc:"Design , Digital campaigns , graphics , Social Media"},
  {id:10,image:IndiaAI,category:"Design",heading:"INDIAai – The National AI Portal of India",desc:"Design , graphics , Social Media , Videos"},
  {id:11,image:Dusserah,category:"Design",heading:"Dussehra ’21 Social Media Creatives",desc:"Design , Social Media"},
  {id:12,image:Graphics,category:"Design",heading:"Graphic Travelogues",desc:"Design , graphics , Websites"},
  {id:13,image:O_1,category:"Design",heading:"OK Play Website",desc:"Design , graphics , Websites"},
  {id:14,image:Youth,category:"Design",heading:"YouthBol",desc:"Design , Digital campaigns , graphics , Social Media"},
  {id:15,image:Mahindra,category:"Design",heading:"Mahindra Kabira Festival",desc:"Design , Digital campaigns , graphics , Social Media , Videos"},


  {id:16,image:Sleepji,category:"Digital campaigns",heading:"ResMed – Sleepy Ji",desc:"Design , Digital campaigns , Social Media , Videos"},
  {id:17,image:Resmed,category:"Digital campaigns",heading:"ResMed Influencer Activity",desc:"Digital campaigns , Influencer Marketing , Social Media"},
  {id:18,image:Lotus,category:"Digital campaigns",heading:"Lotus Herbals",desc:"Design , Digital campaigns , graphics , Social Media"},
  {id:19,image:BBC_1,category:"Digital campaigns",heading:"BBC",desc:"Design , Digital campaigns , Social Media , Videos"},
  {id:20,image:Oasis,category:"Digital campaigns",heading:"Best Oasis",desc:"Design , Digital campaigns , graphics , Social Media"},
  {id:21,image:Influencer,category:"Digital campaigns",heading:"Influencer Campaign for Invaluables",desc:"Digital campaigns , Social Media"},
  {id:22,image:Search_eng,category:"Digital campaigns",heading:"Search Engine Optimization Case Study- Tanziif LLC",desc:"Digital campaigns"},
  {id:23,image:Lead_Gem,category:"Digital campaigns",heading:"Lead Gen for Max Labs",desc:"Digital campaigns"},
  {id:24,image:Graphics,category:"Digital campaigns",heading:"Graphic Travelogues",desc:"Design , Digital campaigns , Social Media , Videos"},
  {id:25,image:O_1,category:"Digital campaigns",heading:"OK Play Social Media",desc:"Digital campaigns , Social Media"},
  {id:26,image:Youth,category:"Digital campaigns",heading:"YouthBol",desc:"Design , Digital campaigns , graphics , Social Media"},
  {id:27,image:Three,category:"Digital campaigns",heading:"Three ROAS Campaign",desc:"Digital campaigns , Social Media"},
  {id:28,image:Mahindra,category:"Digital campaigns",heading:"Mahindra Kabira Festival",desc:"Design , Digital campaigns , graphics , Social Media , Videos"},
  {id:29,image:Solo_ex,category:"Digital campaigns",heading:"Solo Expenses – App promotion",desc:"Digital campaigns , graphics , Social Media , Websites"},
  {id:30,image:JLF,category:"Digital campaigns",heading:"JLF International 2019- Event Promotions",desc:"Digital campaigns , graphics , Social Media"},
  {id:31,image:C_360,category:"Digital campaigns",heading:"360 Campaign for Automotive Engineering Show",desc:"Digital campaigns , graphics , Social Media"},
  {id:32,image:TeamWork_1,category:"Digital campaigns",heading:"Teamwork Productions- Event promotions",desc:"Digital campaigns , graphics , Social Media"},
  {id:33,image:ACMA_1,category:"Digital campaigns",heading:"ACMA Safer Drives: Road safety awareness campaign",desc:"Digital campaigns , graphics , Social Media"},
  
  {id:34,image:PSDesign,category:"Print work",heading:"PS Design Factory | Leaflet Design",desc:"Print work"},
  {id:35,image:PS2,category:"Print work",heading:"PS Design Factory Newspaper Print Ad",desc:"Print work"},
  {id:36,image:LOGO_DES,category:"Print work",heading:"Logo Design For RNCL",desc:"Print work"},
  {id:37,image:LOGO_M,category:"Print work",heading:"Logo and Branding for Shreya Designs",desc:"Print work"},

  {id:38,image:Sleepji,category:"Videos",heading:"ResMed – Sleepy Ji",desc:"Design , Digital campaigns , Social Media , Videos"},
  {id:39,image:AMYR,category:"Videos",heading:"AMYR",desc:"Design , graphics , Videos , Websites"},
  {id:40,image:IndiaAI,category:"Videos",heading:"INDIAai – The National AI Portal of India",desc:"Design , graphics , Social Media , Videos"},
  {id:41,image:Graphics,category:"Videos",heading:"Graphic Travelogues",desc:"Design , Digital campaigns , Social Media , Videos"},
  {id:42,image:Mahindra,category:"Videos",heading:"Mahindra Kabira Festival",desc:"Design , Digital campaigns , graphics , Social Media , Videos"},
  {id:43,image:ReadWhere,category:"Videos",heading:"Readwhere Android App Video",desc:"Digital campaigns , graphics , Videos"},
  {id:44,image:Niryas_food,category:"Videos",heading:"Niryas Foods – Friends Day Video",desc:"Digital campaigns , Social Media , Videos"},
  {id:45,image:Creative,category:"Videos",heading:"Creative animated posts for Niryas Foods",desc:"Digital campaigns , Social Media , Videos"},

];

const categories = ["All","Design","Digital campaigns","Print work","Social Media","Videos","Websites"];

const Or_Work = () => {

  const [selected, setSelected] = useState("All");

  const filteredItems =
  selected === "All"
    ? data
    : data.filter((item) =>
        item.desc.toLowerCase().includes(selected.toLowerCase())
      );

  const style_work = {
    paddingTop : "6rem",
  }
  return (
    <section id="our_work">
      <Navbar />
        <div className="section_work text-center" style={style_work}>
            <div className="container">
              <h1>Our <span>work.</span></h1>
            </div>
            <div>
              {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${selected === cat ? "btn-success" : "btn-outline-secondary"}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
            </div>
            <motion.div initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{delay:0.5}}
            className="row m-5">
              {filteredItems.map((item) => (
                <motion.div initial={{opacity:0,x:100}}
                  animate={{opacity:1,x:0}}
                  transition={{delay:0.5}}
                 key={item.id} className="col-sm-12 col-md-6 col-lg-3 mb-3">
                  <div className="card p-3 h-60 border-0">
                    <a href="/"><img src={item.image} alt={item.heading} className="img-fluid" /></a>
                    <a href="/" className='title'><h3 className="mt-2">{item.heading}</h3></a>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>


        </div>
        <ScrollToTop />
        <Footer />
    </section>
  )
}

export default Or_Work




