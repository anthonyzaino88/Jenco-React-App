import React from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

const MySwiper = () => {
  return (
    <>
    
<Swiper
        spaceBetween={0}
        centeredSlides={true}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
        
      >
        <SwiperSlide>
            <img src="https://solerpalau-usa.com/images/slides/summer2022-01.webp" alt="slide-one"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://solerpalau-usa.com/images/slides/summer2022-01.webp" alt="slide-one"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://solerpalau-usa.com/images/slides/summer2022-01.webp" alt="slide-one"/>
        </SwiperSlide>
        
      </Swiper>
      
      
    </>
  )
}

export default MySwiper;
