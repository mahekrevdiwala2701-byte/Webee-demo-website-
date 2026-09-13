import React from 'react'

const cards = (props) => {
  return (
    <div className='cards_Sec'>
      <div className='card border-0 mb-5'>
        <img src={props.image} alt="" />
        <h1>{props.heading} </h1>
        <p>{props.para}</p>
        <div className='date_text'>
          <div className='meta_info'>
            <p className='date'>{props.date}</p>
            <div className='icons1'>
              <i className="far fa-comment"></i>
              <p>0</p>
              <i className="far fa-heart"></i>
              <p>{props.like}</p>
            </div>
          </div>
          <button className='read'>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default cards
