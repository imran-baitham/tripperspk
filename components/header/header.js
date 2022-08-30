import { Fragment } from "react";
import { BsChatSquare } from "react-icons/bs";
import img from "../../public/images/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// BsChatSquare
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import Button from "../button/button";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
];

function Header() {
  const handlechange = () => {
    alert("hii")
  }
  return (
    <nav className=" px-10" aria-label="Top">
      <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <a href="#">
          <span className="font-bold text-2xl">
            <Link href={"/"}>
              <Image src={img} height={80} width={130} />
            </Link>
          </span>
        </a>
        <div className="flex-1 flex items-center justify-end">
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-black cursor-pointer text-gray-500"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="w-2/4 px-2 lg:px-6">
            <div className="relative text-gray-700 focus-within:text-gray-900">
              <div className="absolute inset-y-0 right-36 pr-2 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-3/4 pl-4 pr-3 py-2 border border-black rounded-md leading-5 outline-0 placeholder-gray-400 text-gray-900 sm:text-sm bg-gray-300"
                placeholder="Find  cars , hotels ,house more...."
                type="search"
              />
            </div>
          </div>
        </div>
        <Link href={"/chatbox"}>
          <div className="border cursor-pointer border-1 border-gray-100 flex items-center justify-center w-10 h-10 rounded-full">
            <BsChatSquare className="h-5 w-5 text-gray-300" aria-hidden="true" />
          </div>
        </Link>

        <Menu as="div" className="ml-3 mr-3 relative flex-shrink-0">
          <div>
            <Menu.Button className="bg-indigo-700 flex text-sm rounded-full text-white border border-1 border-gray-100">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    View Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    My Upload
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Log out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link href="/form">
          <Button onClick={handlechange} className="bg-[#0047FF] px-6 py-[9px] rounded text-white"> Rent out</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
