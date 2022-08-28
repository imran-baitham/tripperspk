import React from 'react';
import { BsChevronDown } from "react-icons/bs";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Cars', href: '#' },
    { name: 'Motorcycle', href: '#' },
    { name: 'house', href: '#' },
    { name: 'lands and Plots', href: '#' },
    { name: 'Apartments', href: '#' },
    { name: 'Cameras', href: '#' },
]

function Category(props) {
    return (
        <div className="w-full h-auto w-5/6 m-auto text-white">
            <h1 className="font-black text-black text-5xl leading-[55px] text-center pt-14">
                Find Rent your own choose
            </h1>
            <header className="bg-[#F4F4F4] text-black mt-10">
                <nav aria-label="Top">
                    <div className="w-full flex items-center justify-between border-none">
                        <div className="flex items-center">
                            <button className='font-semibold px-4 py-3 w-64 text-left flex items-center justify-between focus:bg-gray-200'>All Products <BsChevronDown /></button>
                            <div className="hidden ml-10 space-x-8 lg:block">
                                {navigation.map((link) => (
                                    <a key={link.name} href={link.href} className="text-base font-medium text-black">
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                        {navigation.map((link) => (
                            <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-indigo-50">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Category;


