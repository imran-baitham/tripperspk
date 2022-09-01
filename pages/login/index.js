import React, { useState } from "react";
import Image from "next/image";
import img from "../../public/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
function LoginFrom() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const Validation = () => {
    const errors = {};
    if (email === "") errors.email = "email is required";

    if (password === "") errors.password = "password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  const hendleSubmit = (e) => {
    const errors = Validation();
    if (errors) {
      setEmailError(errors.email);
      setPasswordError(errors.password);
    } else {
      router.push("/")
      setPassword("");
      setEmail("");
      setEmailError(email = "");
      setPasswordError(password = "");
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <form className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center my-14">
                  <Image src={img} alt="image" />
                </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    type="email"
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    type="password"
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <div className="block mt-2  text-sm font-medium text-red-900 dark:text-white">
                    {emailerror||passworderror}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <Link href={"/"}>
                <button
                  onClick={(event) => hendleSubmit(event)}
                  className="w-full font-medium text-white bg-[#0047FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                </Link>
                <a
                  href="#"
                  className="text-sm text-right flex justify-end font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
                <p className="text-sm font-light flex justify-center text-gray-500 dark:text-gray-400">
                  Don’t have an account?
                  <a
                    href="#"
                    className="font-medium text-[#0047FF] hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFrom;
