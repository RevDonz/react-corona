import React from 'react'
import { FeaturesIMG } from '../../assets'
import { FaCheckCircle } from "react-icons/fa";

export default function Features() {
    return (
        <div className="py-5 bg-white font-rubik">
            <div className="container mx-auto px-10 lg:px-20 my-10 lg:my-20">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="w-full lg:w-1/2">
                        <img src={FeaturesIMG} alt=""/>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 mt-10 lg:mt-0">
                        <span className="xl:text-5xl text-3xl">We Provide Many Features You Can Use</span>
                        <span className="mt-10 xl:text-xl text-lg">Provide a network for all your needs with ease and fun using <span className="font-semibold">LaslesVPN</span> discover interesting features from us.</span>
                        <div className="mt-10 space-y-5">
                            <span className="flex">
                                <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                                <span className="xl:text-xl text-lg">Powerfull online protection.</span>
                            </span>
                            <span className="flex">
                                <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                                <span className="xl:text-xl text-lg">Internet without borders.</span>
                            </span>
                            <span className="flex">
                                <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                                <span className="xl:text-xl text-lg">Supercharged VPN.</span>
                            </span>
                            <span className="flex">
                                <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                                <span className="xl:text-xl text-lg">No specific time limits.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
