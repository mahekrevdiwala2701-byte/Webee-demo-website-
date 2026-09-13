import React from 'react'
import {motion} from 'framer-motion'

const Cols = (props) => {
  const path1 = props.path1;
  const path2 = props.path2;

  return (
    <div>
      <div className="+row d-flex">
              <div className="col-lg-6 col-md-6 col-12 c1">
                <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.3}} className='d_text'>
                  <h1>{props.heading}</h1>
                  <hr />
                  <p>{props.para}</p>
                    <a href={path1}><button className='read_btn mt-2'>READ MORE</button></a>
                </motion.div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 c2">
                <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.3}} className='d_text'>
                  <h1>{props.heading2}</h1>
                  <hr />
                  <p>{props.para2}</p>
                    <a href={path2}><button className='read_btn mt-2'>READ MORE</button></a>
                </motion.div>  
              </div>  
            </div>
    </div>
  )
}

export default Cols
