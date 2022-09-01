import React from "react";
import img from "../../public/images/logo.png";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
function SignUp({ setLogin }) {
  console.log(setLogin, "condation")
=======
function index() {
>>>>>>> a96f050f4d0c18b51561b4ffed7083c775368d1d
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
<<<<<<< HEAD
              <div className="space-y-4 md:space-y-6">
=======
              <form className="space-y-4 md:space-y-6" action="#">
>>>>>>> a96f050f4d0c18b51561b4ffed7083c775368d1d
                <div className="flex justify-center my-14">
                  <Image src={img} alt="image" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="Enter your  name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add your  company"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
<<<<<<< HEAD
                    Email & Phone number
=======
                    Phone number
>>>>>>> a96f050f4d0c18b51561b4ffed7083c775368d1d
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your Phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
<<<<<<< HEAD
                <Link href={"/form"}>
                  <button
                    className="w-full flex items-center justify-center font-medium text-white  bg-[#0047FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign up
                  </button>
                </Link>
=======
                <button
                  type="submit"
                  className="w-full flex items-center justify-center font-medium text-white  bg-[#0047FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
>>>>>>> a96f050f4d0c18b51561b4ffed7083c775368d1d
                <p className="text-sm font-light flex justify-center  text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <a
                    href="#"
                    className="font-medium text-[#0047FF] hover:underline dark:text-primary-500"
                  >
                    Log in
                  </a>
                </p>
<<<<<<< HEAD
              </div>
=======
              </form>
>>>>>>> a96f050f4d0c18b51561b4ffed7083c775368d1d
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default SignUp;
=======
export default index;
>>>>>>> a96f050f4d0c18b51561b4ffed7083c775368d1d
