/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <div className='bg-gray-300'>
            <div className="relative flex flex-col">
                {/* Navbar */}
                <Disclosure as="nav" className="flex-shrink-0 bg-gray-400">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                                <div className="relative flex items-center justify-between h-16">
                                    {/* Logo section */}
                                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=300"
                                                alt="Workflow"
                                            />
                                        </div>
                                    </div>

                                    {/* Search section */}
                                    <div className="flex-1 flex justify-center lg:justify-end">
                                        <div className="w-full px-2 lg:px-6">
                                            <label htmlFor="search" className="sr-only">
                                                Search projects
                                            </label>
                                            <div className="relative text-indigo-200 focus-within:text-gray-400">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="search"
                                                    name="search"
                                                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                                    placeholder="Search projects"
                                                    type="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                "icon"// <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                "icon"// <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    {/* Links section */}
                                    <div className="hidden lg:block lg:w-80">
                                        <div className="flex items-center justify-end">
                                            <div className="flex">
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                                                >
                                                    Documentation
                                                </a>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                                                >
                                                    Support
                                                </a>
                                            </div>
                                            {/* Profile dropdown */}
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
                                                    <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                <div className="px-2 pt-2 pb-3">
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"
                                    >
                                        Dashboard
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                                    >
                                        Support
                                    </Disclosure.Button>
                                </div>
                                <div className="pt-4 pb-3 border-t border-indigo-800">
                                    <div className="px-2">
                                        <Disclosure.Button
                                            as="a"
                                            href="#"
                                            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                                        >
                                            Your Profile
                                        </Disclosure.Button>
                                        <Disclosure.Button
                                            as="a"
                                            href="#"
                                            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                                        >
                                            Settings
                                        </Disclosure.Button>
                                        <Disclosure.Button
                                            as="a"
                                            href="#"
                                            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                                        >
                                            Sign out
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}