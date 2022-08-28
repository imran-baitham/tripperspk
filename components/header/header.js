import { Fragment } from 'react'
import { BsChatSquare } from "react-icons/bs"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// BsChatSquare
import { Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Button from '../button/button';

const navigation = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/"
    },
    {
        name: "Services",
        link: "/"
    }
]

function Header() {
    return (
        <nav className="bg-gray-300 px-10" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                <div className="">
                    <a href="#">
                        <span className="font-bold text-2xl">Tripperspk</span>
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="hidden ml-10 space-x-8 lg:block">
                        {navigation.map((link) => (
                            <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-indigo-50">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="w-2/4 px-2 lg:px-6">
                        <div className="relative text-indigo-200 focus-within:text-gray-400">
                            <div className="absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <input
                                id="search"
                                name="search"
                                className="block w-3/4 pl-5 pr-3 py-2 border rounded-2xl leading-5 outline-0 placeholder-gray-400 text-gray-900 sm:text-sm"
                                placeholder="Search projects"
                                type="search"
                            />
                        </div>
                    </div>
                </div>
                <div className="ml-10 space-x-4 flex">
                    <div className='bg-gray-300'>
                        <BsChatSquare className="h-5 w-5" aria-hidden="true" />

                    </div>

                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                        <div>
                            <Menu.Button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
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
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
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
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            Settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            Logout
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Button> Rent out</Button>
                </div>
            </div>
        </nav>
    );

}

export default Header;
