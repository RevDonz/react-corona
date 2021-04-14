import React from 'react';
import { HeroLogo } from '../../assets';
import { HiUser, HiLocationMarker, HiServer } from 'react-icons/hi';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Hero() {
    return (
        <div className="py-5 bg-white font-rubik" id="hero">
            <div className="container mx-auto px-10 lg:px-20 my-10 lg:my-20">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <span className="xl:text-5xl text-3xl">
                            Want anything to be <br/> easy with
                            <span className="font-bold"> LaslesVPN</span>.
                        </span>
                        <span className="mt-10 xl:text-xl text-lg">
                            Provide a network for all your needs with ease and
                            fun using{' '}
                            <span className="font-semibold">LaslesVPN</span>{' '}
                            discover interesting features from us.
                        </span>
                        <div className="mt-10">
                            <button className="px-16 py-3 text-lg font-semibold bg-first focus:outline-none transition-all duration-500 hover:shadow-md text-white rounded-lg shadow-2xl">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:block">
                        <LazyLoadImage src={HeroLogo} alt="Hero Images" width="100%" />
                    </div>
                </div>
                <div className="mt-10 lg:mt-20 shadow-2xl rounded-xl">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 md:p-5 justify-around">
                        <div className="flex p-5 justify-center">
                            <div className="bg-red-300 p-4 rounded-full items-center justify-center mr-5">
                                <HiUser className="text-red-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">90+</span>
                                <span>Users</span>
                            </div>
                        </div>
                        <div className="flex p-5 justify-center">
                            <div className="bg-red-300 p-4 rounded-full items-center justify-center mr-5">
                                <HiLocationMarker className="text-red-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">30+</span>
                                <span>Locations</span>
                            </div>
                        </div>
                        <div className="flex p-5 justify-center">
                            <div className="bg-red-300 p-4 rounded-full items-center justify-center mr-5">
                                <HiServer className="text-red-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">50+</span>
                                <span>Servers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
