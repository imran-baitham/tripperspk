import React from "react";
import img from "../../public/images/logo.png";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

function Footer() {
  return (
    <div className="bg-[#000000] text-white h-[313.38px] flex justify-around items-center">
      <div>
        <Image src={img} />
        <p className="ml-5">
          Bring your dreams <br /> to life with locals
        </p>
      </div>
      <div>
        <h1 className="font-extrabold">Accomodations</h1>
        <p>Apartments</p>
        <p>Rooms</p>
        <p>Resorts</p>
        <p>Campsite</p>
      </div>
      <div>
        <h1 className="font-extrabold">Vechicle</h1>
        <p>Cars</p>
        <p>Bikes</p>
        <p>Cycles</p>
        <p>Campsite</p>
      </div>
      <div>
        <h1 className="font-extrabold">Accomodations</h1>
        <p>Apartments</p>
        <p>Rooms</p>
        <p>Resorts</p>
        <p>Campsite</p>
      </div>
      <div className="mb-9">
        <h1 className="font-extrabold ">Contact us</h1>
        <p>site feedback</p>
        <p>Report problem</p>
      </div>
      <div className="text-white ">
        <h1 className="font-extrabold">Find on us</h1>
        <div className="flex justify-around items-center">
          <AiOutlineInstagram />
          <p className="ml-2">Instagram</p>
        </div>
        <div className="flex justify-around items-center">
          <BsFacebook />
          <p>Facebook</p>
        </div>
        <div className="flex justify-around items-center">
          <ImLinkedin />
          <p>Linkedin</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
