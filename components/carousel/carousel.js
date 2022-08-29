import React, { useRef, useState } from "react";
import orangeimage from "../../public/images/orangecar.png";
import blackimage from "../../public/images/blackcar.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="bg-gray-900 w-full h-96 w-5/6 mt-14 rounded-md"
      >
        <SwiperSlide>
          <div className="flex items-center h-96 justify-around">
            <div className="">
              <h1 className="font-bold text-white text-5xl leading-[55px]">
                Rent it
                <br />
                Search it
                <br />
                Rent out
              </h1>
            </div>
            <div className="w-2/4">
              <img
                className="w-full h-92"
                src={orangeimage.src}
                alt="image slider"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center h-96 justify-around">
            <div className="">
              <h1 className="font-bold text-white text-5xl leading-[55px]">
                Rent it
                <br />
                Search it
                <br />
                Rent out
              </h1>
            </div>
            <div className="w-2/4">
              <img
                className="w-full h-96"
                src={blackimage.src}
                alt="image slider"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
