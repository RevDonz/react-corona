import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IMGLogo } from '../../assets'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="py-5 bg-gradient-to-b from-gray-100 to-white font-rubik" id="pricing">
            <div className="container mx-auto px-10 lg:px-20 my-10 lg:my-20 relative">
                <div className="bg-white w-full p-10 -top-36 shadow-md rounded-lg ">
                    a
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-2">
                        <div className="flex items-center">
                            <LazyLoadImage src={IMGLogo} className="w-7 h-7 mr-2" />
                            <span className="font-semibold text-lg">LaslesVPN</span>
                        </div>
                        <div className="mt-4 w-2/3 leading-7">
                            <p className="text-gray-500"><span className="font-semibold">LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                        </div>
                        <div className="flex mt-4 space-x-3">
                            <div className="p-4 bg-white rounded-full hover:shadow-md transition-all duration-300 text-first items-center shadow-xl text-lg"><FaFacebookF /></div>
                            <div className="p-4 bg-white rounded-full hover:shadow-md transition-all duration-300 text-first items-center shadow-xl text-lg"><FaTwitter /></div>
                            <div className="p-4 bg-white rounded-full hover:shadow-md transition-all duration-300 text-first items-center shadow-xl text-lg"><FaInstagramSquare /></div>
                        </div>
                    </div>
                    <div className="">
                        <span className="font-semibold">Product</span>
                        <ul className="space-y-5 pt-5 text-gray-500">
                            <li className="cursor-pointer">Download</li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">Locations</li>
                            <li className="cursor-pointer">Server</li>
                            <li className="cursor-pointer">Countries</li>
                            <li className="cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div className="">
                        <span className="font-semibold">Engage</span>
                        <ul className="space-y-5 pt-5 text-gray-500">
                            <li className="cursor-pointer">LaslesVPN ?</li>
                            <li className="cursor-pointer">FAQ</li>
                            <li className="cursor-pointer">Tutorials</li>
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div className="">
                        <span className="font-semibold">Earn Money</span>
                        <ul className="space-y-5 pt-5 text-gray-500">
                            <li className="cursor-pointer">Affiliate</li>
                            <li className="cursor-pointer">Become Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
