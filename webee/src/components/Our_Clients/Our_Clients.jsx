import React, { useState } from 'react'
import './Our_Client.css'
import mahindra from '../../assets/mahindra.png'
import acma from '../../assets/ACMA.png'
import ford from '../../assets/ford.png'
import HT from '../../assets/HT.png'
import CBRE from '../../assets/CBRE.png'
import nation from '../../assets/nation.png'
import mtv from '../../assets/Mtv.png'
import messe from '../../assets/messe.png'
import dupont from '../../assets/Dupont.png'
import usaid from '../../assets/USAID.png'
import hella from '../../assets/Hella.png'
import BP from '../../assets/BP.png'
import max from '../../assets/MAx.png'
import schor from '../../assets/Scholastic.png'
import orif from '../../assets/Oriflame.png'
import bbc from '../../assets/BBC.png'
import lotus from '../../assets/Lotus.png'
import naascom from '../../assets/Nasscom.png'
import zone from '../../assets/Zone.png'
import shemford from '../../assets/Shemford.png'
import ISGEC from '../../assets/ISGEC.png'
import UNDP from '../../assets/UNDP.png'
import colors from '../../assets/colors.png'
import SOS from '../../assets/SOS.png'
import ok_play from '../../assets/OkPlay.png'
import tci from '../../assets/TCI.png'
import goethe from '../../assets/Goethe.png'
import teamwork from '../../assets/teamwork.png'
import aston from '../../assets/Aston.png'
import bb from '../../assets/bare_body.png'
import pf from '../../assets/population.png'
import jagat from '../../assets/jagat.png'

import {motion} from 'framer-motion'

const Our_Clients = (props) => {
  const [count,setCount] = useState(0);
  const color = props.colour;

  return (
  <section id="our_Clients">
    <div className={`section_clients text-center ${color}`}>
      <div className='client_text'>
        <h1>Our <span className='clients'>Clients</span></h1>
      </div>

      {/* Logos - Always visible */}
      <div className='logos row mt-5'>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.2}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={mahindra} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.4}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={acma} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.6}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={ford} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.8}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={HT} alt="" /></motion.div>
      </div>  

      <div className='logos row mt-2'>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.0}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={CBRE} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.2}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={nation} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.3}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={mtv} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.4}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={messe} alt="" /></motion.div>
      </div>

      <div className='logos row mt-2'>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.6}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={dupont} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.6}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={usaid} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.8}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={hella} alt="" /></motion.div>
          <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:1.8}} className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={BP} alt="" /></motion.div>
      </div>
      <div className='after_click'>

      {count >= 1 && (
        <div className='logos row mt-4 fade-in'>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={max} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={schor} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={orif} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={bbc} alt="" /></div>
        </div>
      )}

      {count >= 1 && (
        <div className='logos row mt-4 fade-in'>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={lotus} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={naascom} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={zone} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={shemford} alt="" /></div>
        </div>
      )}

      {count >= 1 && (
        <div className='logos row mt-4 fade-in'>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={ISGEC} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={UNDP} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={colors} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={SOS} alt="" /></div>
        </div>
      )}

      {count >= 2 && (
        <div className='logos row mt-4 fade-in'>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={ok_play} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={dupont} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={goethe} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={teamwork} alt="" /></div>
        </div>
      )}

      {count >= 2 && (
        <div className='logos row mt-4 fade-in bottom'>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon"><img src={aston} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={bb} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={pf} alt="" /></div>
            <div className="col-lg-3 col-sm-12 col-md-6 clients_icon isgec"><img src={jagat} alt="" /></div>
        </div>
      )}  


      </div>

      {count < 2 && (
        <div className='load_more'>
          <button
            className='load'
            onClick={() => setCount(prev => prev + 1)}
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  </section>
);

}

export default Our_Clients
