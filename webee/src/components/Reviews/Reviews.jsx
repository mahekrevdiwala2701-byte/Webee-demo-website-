import React from 'react'
import './Reviews.css'
import white_img from '../../assets/white_img.avif'

const Reviews = () => {
  return (
    <section id="review">
        <div className="review_section">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={white_img} class="d-block w-100" alt="..."/>
                        <h1 className='review_q'>”</h1>
                        <div className='review_text'>
                            <h1>As a marketer if I have a story, they are the best story tellers. They make your story heard & understood.</h1>
                            <hr />
                            <p>Gaurav Sandilya / S.R. Overseas</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={white_img} class="d-block w-100" alt="..."/>
                        <h1 className='review_q'>”</h1>
                        <div className='review_text'>
                            <h1>It is reassuring to work with people who treat your properties as their own and think pro-actively</h1>
                            <hr />
                            <p>Ankita Dasgupta / Marketing Manager, Teamwork Arts</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={white_img} class="d-block w-100" alt="..."/>
                        <h1 className='review_q'>”</h1>
                        <div className='review_text slider3'>
                            <h1>Webeesocial has been a fantastic partner in helping us define and optimize our digital objectives at ACMA</h1>
                            <hr />
                            <p>Harkaran Malhotra / Deputy Director, ACMA</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span> */}
                    <a href="/"><span>←</span></a>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span> */}
                    <a href="/"><span>→</span></a>
                </button>
                </div>
        </div>
    </section>
  )
}

export default Reviews
