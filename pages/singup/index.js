import React, { useState } from "react";
import img from "../../public/images/logo.png";
import Image from "next/image";
function Index() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const Validation = () => {
    const error = {};
    if (name === "") error.name = ("Enter your name");
    if (phoneNumber === "") error.phoneNumber =  ("Enter your phone number");
    if (password === "") error.password =( "Enter your password");
    if (confirmPassword === "") error.confirmPassword = ("Enter your confirmPassword");
    return Object.keys(error).length === 0 ? null : error;
  };
  const hendleSubmit = (e) => {
    const errors = Validation();
    if (errors) {
      setNameError(errors.name);
      setPhoneNumberError(errors.phoneNumber);
      setPasswordError(errors.password);
      setConfirmPasswordError(errors.confirmPassword);
    } else {
      setName("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
      setNameError((name = ""));
      setPhoneNumberError((phoneNumber = ""));
      setPasswordError((password = ""));
      setConfirmPasswordError((confirmPassword = ""));
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="flex justify-center my-14">
                  <Image src={img} alt="image" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="Enter your  name"
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add your  company"
                    required=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone number
                  </label>
                  <input
                    value={phoneNumber}
                    type="number"
                    placeholder="Enter your Phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={confirmPassword}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="block mb-2 text-sm font-medium text-red-900 dark:text-white">
                    {nameError ||
                      phoneNumberError ||
                      passwordError ||
                      confirmPasswordError}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  onClick={(e) => hendleSubmit(e)}
                  type="submit"
                  className="w-full flex items-center justify-center font-medium text-white  bg-[#0047FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light flex justify-center  text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <a
                    href="#"
                    className="font-medium text-[#0047FF] hover:underline dark:text-primary-500"
                  >
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
