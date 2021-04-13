import React from 'react'
import { IMGLogo } from '../../assets'
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        <div className="py-5 bg-white font-rubik">
            <div className="container mx-auto px-10 lg:px-20">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                        <img src={IMGLogo} className="mr-3 w-8 h-8" alt="Logo"/>
                        <span className="font-semibold">Lasles</span><span className="font-bold">VPN</span>
                    </div>
                    <div className="hidden lg:block text-gray-600">
                        <span className="mr-7">About</span>
                        <span className="mr-7">Features</span>
                        <span className="mr-7">Pricing</span>
                        <span className="mr-7">Testimonials</span>
                        <span className="mr-7">Help</span>
                    </div>
                    <div className="hidden lg:block">
                        <button className="font-bold mr-7 focus:outline-none">Sign Up</button>
                        <button className="px-7 py-1 focus:outline-none transition-all duration-500 font-semibold text-first border-first border-2 rounded-full hover:bg-first hover:text-white">Sign In</button>
                    </div>
                    <div className="block lg:hidden py-3 px-4 rounded-lg shadow-md hover:shadow transition-all duration-100">
                        <HiMenuAlt3/>
                    </div>
                </div>
            </div>
        </div>
    )
}