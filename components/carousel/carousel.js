import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../public/images/image4.png"
import Image from "next/image";
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
                className="bg-gray-900 w-full h-96 w-5/6 mt-14 rounded-md">
                <SwiperSlide>
                    <div className="flex items-center h-96 justify-around">
                        <div className="">
                            <h1 className="font-bold text-white text-5xl leading-[55px]">Rent it<br />
                                Search it<br />
                                Rent out
                            </h1>
                        </div>
                        <div className="w-2/4">
                            <Image className="w-full h-96" src={img} alt="image slider" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center h-96 justify-around">
                        <div className="">
                            <h1 className="font-bold text-white text-5xl leading-[55px]">Rent it<br />
                                Search it<br />
                                Rent out
                            </h1>
                        </div>
                        <div className="w-2/4">
                            <Image className="w-full h-96" src={img} alt="image slider" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
