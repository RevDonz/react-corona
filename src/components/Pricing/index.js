import React from 'react'
import { PriceIMG } from '../../assets'
import { FaCheck } from "react-icons/fa";
import { About } from "../index"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Pricing() {
    return (
        <div className="py-5 bg-gradient-to-b from-gray-100 to-white font-rubik" id="pricing">
            <div className="container mx-auto px-5 lg:px-20 my-10 lg:my-20">
                <div className="lg:w-1/2 w-full mx-auto text-center flex flex-col mb-10">
                    <span className="xl:text-5xl text-3xl font-semibold">Choose Your Plan</span>
                    <span className="text-base mt-10">Let's choose the package that is best for you and explore it happily and cheerfully.</span>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
						<div class="bg-white border-2 border-gray-200 hover:border-first transition-all duration-200 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden items-center p-5">
                            <LazyLoadImage src={PriceIMG} alt="Price" className="my-5" width="w-1/2" />
                            <span className="font-semibold my-5">Free Plan</span>
                            <div className="space-y-5 my-5">
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Unlimited Bandwith.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Encrypted Connection.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">No Traffic Logs.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Works on All Devices.</span>
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-auto mb-5">
                                <span className="font-bold text-lg">Free</span>
                                <button className="px-9 hover:shadow-lg py-1 border-2 border-first font-bold text-first rounded-full focus:outline-none hover:bg-first hover:text-white transition-all duration-200">Select</button>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
						<div class="bg-white border-2 border-gray-200 hover:border-first transition-all duration-200 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden items-center p-5">
                            <LazyLoadImage src={PriceIMG} alt="Price" className="my-5" width="w-1/2" />
                            <span className="font-semibold my-5">Standard Plan</span>
                            <div className="space-y-5 my-5">
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Unlimited Bandwith.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Encrypted Connection.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Yes Traffic Logs.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Works on All Devices.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Connect Anyware.</span>
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-auto mb-5">
                                <span className="font-bold text-lg">$9 <span className="font-normal text-gray-500">/ mo</span></span>
                                <button className="px-9 hover:shadow-lg py-1 border-2 border-first font-bold text-first rounded-full focus:outline-none hover:bg-first hover:text-white transition-all duration-200">Select</button>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
						<div class="bg-white border-2 border-gray-200 hover:border-first transition-all duration-200 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden items-center p-5">
                            <LazyLoadImage src={PriceIMG} alt="Price" className="my-5" width="w-1/2" />
                            <span className="font-semibold my-5">Premium Plan</span>
                            <div className="space-y-5 my-5">
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Unlimited Bandwith.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Encrypted Connection.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">No Traffic Logs.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Works on All Devices.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Connect Anyware.</span>
                                </span>
                                <span className="flex items-center">
                                    <FaCheck className="text-green-500 mr-3" />
                                    <span className="">Get New Features.</span>
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-auto mb-5">
                                <span className="font-bold text-lg">$12 <span className="font-normal text-gray-500">/ mo</span></span>
                                <button className="px-9 hover:shadow-lg py-1 border-2 border-first font-bold text-first rounded-full focus:outline-none hover:bg-first hover:text-white transition-all duration-200">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
        </div>
    )
}
