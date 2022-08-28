import React, { useRef, useState } from "react";
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
                className="bg-gray-900 w-full h-96 w-5/6 mt-10 rounded-md">
                <SwiperSlide>
                    <div className="flex items-center h-96 justify-around">
                        <div className="">
                            <h1 className="font-bold text-white text-5xl leading-[55px]">Rent it<br />
                                Search it<br />
                                Rent out
                            </h1>
                        </div>
                        <div className="w-2/4">
                            <img className="w-full h-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEzg48O6_CqEi_f_xfK5OnUrevyBG3FMXyw&usqp=CAU" alt="image slider" />
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
                            <img className="w-full h-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaRHTO7rNHiYhWB_h_Svfblub9-VR-qZ-iA&usqp=CAU" alt="image slider" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
