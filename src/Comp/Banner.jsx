import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function Banner() {
  return (
    < >
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://icms-image.slatic.net/images/ims-web/6bba4cb6-1eb7-4ba2-99a3-d71f7f6e2154.jpg_1200x1200.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://icms-image.slatic.net/images/ims-web/17e09e23-c6ff-4c29-891b-45a9d952bda9.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://icms-image.slatic.net/images/ims-web/3d2211b0-d5a2-49e6-a605-62b51f68b9ee.jpg" alt="" />
      </SwiperSlide>
      
      
    </Swiper>
    </ >
  )
}

export default Banner
