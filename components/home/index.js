import React from "react";
const Dreams = () => {
  return (
    <div>
      <div className="w-full h-[76vh] bg-[url('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center  backdrop-blur-lg">
          <h1 className="mt-5 text-4xl text-white ml-[8%] leading-[80px] text-6xl font-semibold drop-shadow-lg bold">
            Bring your dreams <br /> to life with locals
          </h1>
          <div className="leading-[100px]">
            <button className="text-white ml-[8%] text-lg font-bold bg-[#0047FF] py-3 px-7">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dreams;
