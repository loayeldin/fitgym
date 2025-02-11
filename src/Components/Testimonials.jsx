import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {motion} from 'motion/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Testimonials({ref}) {
  const slides = [
    {
      image: "./assets/Client_Section.jpg",
      name: "Jonathan Edward",
      type:'Athletes',
      description: "“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”",
    },
    {
      image: "./assets/client2.jpg",
      name: "Jonathan Edward",
      type:'Athletes',
      description: "“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”",
    },
    {
      image: "./assets/client3.jpg",
      name: "Jonathan Edward",
      type:'Athletes',
      description: "“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”",
    },
    // Add more slides as needed
  ];
  return (
    <motion.div
    initial={{ opacity: 0, x: -520 }} 
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ ease: "easeOut", duration: 1, delay: .8}}
    className="container"
    ref={ref}
    >
      <div className="Testimonials py-10 mt-16">
        <div className="mb-10 gap-y-3">
          <h3 className="font-bold text-lg tracking-[4px] ">Testimonials</h3>
          <h2 className="text-2xl md:leading-10 md:text-[46px] text-maincolor font-bold">
            What Say About Our Clients
          </h2>
        </div>


        <div >
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content flex flex-col md:flex-row gap-x-5 gap-y-4 justify-between pr-16">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-img md:rounded-md md:w-96 md:h-full w-40 h-40 rounded-full md:mx-0 mx-auto" />
              <div className="slide-text flex flex-col justify-center  md:max-w-[55%] ">
                <h2 className="mb-10 text-lg">{slide.description}</h2>
                <p className="text-lg">{slide.name}</p>
                <p className="text-lg">{slide.type}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      
      </div>
    </motion.div>
  );
}

export default Testimonials;
