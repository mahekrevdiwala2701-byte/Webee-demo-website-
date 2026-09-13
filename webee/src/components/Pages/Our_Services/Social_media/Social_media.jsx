import React, { useState } from 'react';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Navbar/Navbar';
import {
  Card,
  CardActionArea
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import slider1 from '../../../../assets/slider1.1.jpg';
import slider2 from '../../../../assets/slider1.2.png';
import slider3 from '../../../../assets/slider1.3.png';
import slider4 from '../../../../assets/slider1.4.png';
import slider5 from '../../../../assets/slider1.5.png';
import slider6 from '../../../../assets/slider1.6.png';
import award2 from '../../../../assets/award2.png'
import './Social_media.css'

const useStyles = makeStyles({
  sideColumn: {
    height: '20rem',
    position: 'relative',
    overflow: 'hidden',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '8.8vw',
      height: '120%',
      background: 'white',
      top: '-10%',
      left: 0,
      zIndex: 3,
    },
    '&:after': {
      left: 'auto',
      width: '9.2vw',
      right: 0,
    }
  },
  cardSlider: {
    position: 'relative',
    height: '20rem',
    maxWidth: '82vw',
    margin: '0 auto',
  },
  cardWrapper: {
    display: 'flex',
    position: 'absolute',
    left: '0',
    transition: 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  },
  button: {
    display: 'block',
    position: 'absolute',
    border: 'none',
    borderRadius: '50%',
    height: '4vw',
    width: '4vw',
    zIndex: 4,
    top: '25%',
    backgroundColor: '#dbdee0',
    color: 'rgb(121, 111, 111)',
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      transform: 'translateY(1px)',
      filter: 'saturate(150%)'
    },
    '&:hover': {
      borderColor: '#f3f3f3',
      backgroundColor: '#f3f3f3',
      cursor: 'pointer',
    }
  },
  buttonRight: {
    right: '-2.5%',
  },
  buttonLeft: {
    left: '-3%',
  }
});

// Image-only card data
const cards = [
  { img: slider1 },
  { img: slider2 },
  { img: slider3 },
  { img: slider4 },
  { img: slider5 },
  { img: slider6 },
];

// Image-only card component
const ExampleCard = ({ img }) => (
  <Card style={{ width: '20vw', height: '20rem', marginRight: '1vw', border: 'none', boxShadow: 'none' }}>
    <CardActionArea>
      <img
        src={img}
        alt="slider"
        style={{
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover'
        }}
      />
    </CardActionArea>
  </Card>
);

const Social_media = () => {
  const classes = useStyles();
  const [card, setCard] = useState(0);
  const canSlideLeft = card > 0;
  const canSlideRight = card < cards.length - 4;

  return (
    <section id="web_des">
      <Navbar />
      <div className="design_section mb-5">
        <div className='social1'>
          <h1>Creative <span>Social Media Marketing Agency in India</span></h1>
          <p>We don’t want to brag about ourselves, but we’ve to say that we can help you establish the business you desire. From innovative designs to the best creative solutions and the theme you will fall for! Our motive is to make your business shine. Have a look at some of our outstanding creatives for our clients here.</p>
          <p>We’re gonna go ahead and say that this is our speciality - after all, social is in our name, quite literally! Truly the key to any communication strategy, social media has the potential to give your brand the boost you never thought possible. Our agency uses a variety of social strategies across different channels to support our campaigns.</p>
          <p>We leverage the power of social media in the right way to utilise the optimal platforms, reach the appropriate audience, and initiate and encourage fruitful conversations with them. We also ensure that your customers can share, engage, add content, converse and give ratings and recommendations of your content, services, and products. Social media is a two-way street, and we believe in keeping an open and inviting dialogue. Our company also aids clients in running targeted, strategic ad campaigns on various platforms, along with recommending and executing innovative strategic and technical solutions to guarantee maximum social impact and engagement.</p>
          <p><a href="/">Here </a>is some work we’re super proud of!</p>
        </div>

        <div>
          <div className={classes.sideColumn}>
            <div className={classes.cardSlider}>
              {canSlideRight && (
                <button
                  onClick={() => setCard(card + 1)}
                  className={`${classes.button} ${classes.buttonRight}`}
                >
                  {'>'}
                </button>
              )}
              {canSlideLeft && (
                <button
                  onClick={() => setCard(card - 1)}
                  className={`${classes.button} ${classes.buttonLeft}`}
                >
                  {'<'}
                </button>
              )}
              <div
                className={classes.cardWrapper}
                style={{ transform: `translateX(-${card * 21}vw)` }}
              >
                {cards.map((cardData, index) => (
                  <ExampleCard key={index} img={cardData.img} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='row award2'>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>Imagination has a great deal to do with winning and that’s what we did for Youthbol and grabbed the Digixx Gold Award 2020 in the charities and non-profit category. We focused on increasing chatter around our campaign through contests and polls and came out with flying colours. Our hard work literally paid off!</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={award2} alt="" className='award_digital'/>
              </div>
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Social_media;
