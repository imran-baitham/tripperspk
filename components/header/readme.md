// import logo from "../../public/images/logo.svg"
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';

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

<header className="bg-indigo-600">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
<div className="flex items-center">
<a href="#">
<span className="bg-gray-200 font-bold text-2xl">Tripperspk</span>
</a>
<div className="hidden ml-10 space-x-8 lg:block">
{navigation.map((link) => (
<a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
{link.name}
</a>
))}
</div>
</div>

                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-2/4 px-2 lg:px-6">
                            <label htmlFor="search" className="sr-only">
                                Search projects
                            </label>
                            <div className="relative text-indigo-200 focus-within:text-gray-400">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className="block w-full pl-5 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                    placeholder="Search projects"
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="#"
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            Rent out
                        </a>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );

}

export default Header;

<Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
<Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames(
active ? 'bg-gray-100' : '',
'block px-4 py-2 text-sm text-gray-700'
)} >
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
)} >
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
)} >
Logout
</a>
)}
</Menu.Item>
</Menu.Items>
</Transition>

<!-- ===================================================== -->

// import logo from "../../public/images/logo.svg"
import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

import { Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';

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

        <header className="bg-indigo-600">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="bg-gray-200 font-bold text-2xl">Tripperspk</span>
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-2/4 px-2 lg:px-6">
                            <label htmlFor="search" className="sr-only">
                                Search projects
                            </label>
                            <div className="relative text-indigo-200 focus-within:text-gray-400">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className="block w-full pl-5 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                    placeholder="Search projects"
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )} >
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
                                            )} >
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
                                            )} >
                                            Logout
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>

                        <a
                            href="#"
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            Rent out
                        </a>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );

}

export default Header;
