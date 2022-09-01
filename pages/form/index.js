/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Category from "../../components/category/category";
import Header from "../../components/header/header";


function From() {
  const hendleSubmit =(e)=>{
    e.preventDefalt()
  }
  return (
    <>
      <Header />
      <Category />
      <div className="mt-10 sm:mt-0">
        <div className="md:flex md:flex flex-col  justify-center aligin-center  md:gap-6">
          <div className=" md:mt-0  md:col-span-1 p-14">
            <h2 className="font-bold text-4xl my-14  text-center">
              POST YOUR AD
            </h2>
            <form
              action="#"
              onSubmit={hendleSubmit}
              method="POST"
              className="w-[83vw] border-[3px] m-auto  justify-center aligin-center"
            >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 sm:px-0">
                  <h3 className="text-xl font-bold leading-6 m-4 text-gray-900">
                    POST YOUR AD
                  </h3>
                  <p className="m-4  text-sm text-gray-600">
                    Accomodations / Room{" "}
                    <a className="border-b-[2px]">Change</a>
                  </p>
                </div>
                <hr className="mt-10 " />
                <div className="p-14">
                  <div className="ml-6">
                    <h2>INCLUDE SOME DETAILS</h2>
                  </div>
                  <div className="px-4 py-5 bg-white sm:p-6 p-14">
                    <div className="">
                      <div className="">
                        <label className="text-sm font-extrabold text-gray-700">
                          Add title
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="mt-1 p-4 outline-none ring-black border-black-500  w-full border rounded-md"
                        />
                        <p className="text-sm mt-2 font-medium text-gray-700">
                          Title should contain at least 5 alphanumeric
                          characters. Please edit the field
                        </p>
                      </div>
                      <div className=" mt-6">
                        <h2 className="mb-2">Description</h2>
                        <textarea
                          type="text"
                          name="first_name"
                          id="first_name"
                          placeholder="Write your description"
                          className="mt-1 p-4 ring-black outline-none border-black-500  w-full border rounded-md"
                        />
                        <p className="text-sm font-medium text-gray-700">
                          Include condition, features and reason for Rent out
                        </p>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm mt-5 mb-2 font-extrabold text-gray-700">
                          Brand
                        </label>
                        <select
                          id="country"
                          name="country"
                          placeholder="Category name"
                          className="mt-1 p-4 bg-white outline-none ring-black border-black-500  w-full border rounded-md"
                        >
                          <option>Category name</option>
                          <option>Rooms</option>
                          <option>Apartment</option>
                          <option>Resorts</option>
                          <option>Campsites</option>
                          <option>Car</option>
                          <option>Bike</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-10 " />
                <div className="p-[80px]">
                  <div>
                    <h2 className="font-extrabold">Select a price</h2>
                    <label className="text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="mt-1 p-4 outline-none  ring-black border-black-500  w-full border rounded-md"
                    />
                    <p className="text-sm mt-2 font-medium text-gray-700">
                      Title should contain at least 5 alphanumeric characters.
                      Please edit the field
                    </p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-extrabold mt-8 text-gray-900 dark:text-gray-300">
                      Upload your photos
                    </label>
                    <input
                      className="mt-1 p-4 outline-none ring-black border-black-500  w-full border rounded-md cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type="file"
                    />
                    <p className="text-sm mb-8 m-2 font-medium text-gray-700">
                      For the cover picture we reccommended to using landscape
                      model
                    </p>
                  </div>
                  <div>
                    <h2 className="font-extrabold mb-3">Your AD'S location</h2>
                    <label className="text-sm   font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter your location"
                      className="mt-1 p-4 outline-none ring-black border-black-500 mb-4  w-full border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium  text-gray-700">
                      Available/booked
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="mt-1 p-4 outline-none ring-black border-black-500  w-full border rounded-md"
                    />
                  </div>
                  <div>
                    <h2 className="font-extrabold mt-3">
                      lets verify your account
                    </h2>
                    <label className="text-sm   font-medium text-gray-700">
                      Mobile phone number
                    </label>
                    <input
                      type="number"
                      name="first_name"
                      id="first_name"
                      placeholder="+92 | Mobile number"
                      className="mt-1 p-4 outline-none ring-black border-black-500 mb-4  w-full border rounded-md"
                    />
                    <p className="text-sm mb-8 font-medium text-gray-700">
                      Show my phone number in ads
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 text-center mb-[170px]">
                  <button
                    type="submit"
                    className="py-4 px-12 text-white font-bold bg-[#0047FF] "
                  >
                    Post Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default From;
