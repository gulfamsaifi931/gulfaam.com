import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Helmet} from "react-helmet/es/Helmet";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
//import profilePic2 from "../../img/profile2.jpg";
//import profilePic3 from "../../img/profile3.jpg";
//import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Named:Ferdushi:.1. Solid technical expertise, 2. Maintains an end user focus, 3. Fast self learner, 4. Strong communication skills, 5. Dependable time and task management, 6. A Good team player, 7. ‘Never say die’ attitude.",
    },
  //  {
    //  img: profilePic2,
    //  review:
      //  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    //},
  //  {
    //  img: profilePic3,
    //  review:
      //  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  //  },
  //  {
    //  img: profilePic4,
      //review:
    //    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  //  },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
        <Helmet>
                <title>Gulfam saifi || Gulfaam saifi</title>
                <link rel="icon" href={"https://gulfaam.com"}/>
                <meta name="gulfam saifi, gulfaam saifi" content={"gulfam saifi, gulfaam saifi"}/>
                <meta name="gulfam saifi, gulfaam saifi" content={"gulfamsaifi"}/>
                <meta property="og:gulfam saifi, gulfaam saifi" content={"og:gulfam saifi, gulfaam saifi"}/>
                <meta property="og:gulfam saifi, gulfaam saifi" content={"og:gulfam saifi, gulfaam saifi"}/>
             </Helmet>
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;