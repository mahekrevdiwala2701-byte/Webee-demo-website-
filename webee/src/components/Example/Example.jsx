import Review1 from '../../assets/About_img.jpg'
import Review2 from '../../assets/award_img.png'
import Review3 from '../../assets/hero_img.jpg'
import Review4 from '../../assets/award_img.png'
import Review5 from '../../assets/About_img.jpg'
import Review6 from '../../assets/hero_img.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const teamMembers = [
  {
    // name: "Kathryn Ryan",
    // title: "CEO, Founder, Atty.",
    image: Review1
  },
  {
    // name: "Jeremy Walker",
    // title: "CEO, Founder, Atty.",
    image: Review2
  },
  {
    // name: "Lawson Arnold",
    // title: "CEO, Founder, Atty.",
    image: Review3
  },
  {
    // name: "Jessica Thomas",
    // title: "CTO, Co-Founder",
    image: Review4
  }
];

const CustomArrow = ({ className, onClick, direction }) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#28a745",
      borderRadius: "5px",
      width: "35px",
      height: "35px",
      zIndex: 2,
    }}
  >
    {direction === "next" ? "→" : "←"}
  </div>
);

const TeamSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div style={{ padding: "50px 20px", maxWidth: "1200px", margin: "0 auto",alignItems:"center",justifyContent:"center" }} className="slider_div">
      <Slider {...settings}>
        {teamMembers.map((member, idx) => (
          <div key={idx} style={{ padding: "15px"  }}>
            <div
              style={{
                border: "2px solid rgb(7, 54, 134)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "20px",
                backgroundColor: 'aliceblue',
                margin:"0 1.5rem"
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }} className="img_slider"
              />
              <h3 style={{ margin: "10px 0 5px", color: "#2d2d2d" }}>{member.name}</h3>
              <p style={{ margin: 0, color: "#6c757d" }}>{member.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;