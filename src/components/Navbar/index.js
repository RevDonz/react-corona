import React from 'react';
import { IMGLogo } from '../../assets';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({ scrollNav }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <div
            className={`py-5 bg-white font-rubik ${
                scrollNav ? 'sticky top-0 z-20 shadow' : ''
            }`}
        >
            <div className="container mx-auto px-10 lg:px-20">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        onClick={toggleHome}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div className="flex items-center justify-between">
                            <img
                                src={IMGLogo}
                                className="mr-3 w-8 h-8"
                                alt="Logo"
                            />
                            <span className="font-semibold">Lasles</span>
                            <span className="font-bold">VPN</span>
                        </div>
                    </Link>
                    <div className="hidden lg:block text-gray-600">
                        <Link
                            to="about"
                            className="mr-7 cursor-pointer"
                            spy={true}
                            smooth={true}
                            activeClass="text-first"
                            duration={500}
                            offset={-120}
                        >
                            About
                        </Link>
                        <Link
                            to="features"
                            className="mr-7 cursor-pointer"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            activeClass="text-first"
                            duration={500}
                        >
                            Features
                        </Link>
                        <Link
                            to="pricing"
                            className="mr-7 cursor-pointer"
                            spy={true}
                            smooth={true}
                            activeClass="text-first"
                            duration={500}
                        >
                            Pricing
                        </Link>
                        <span className="mr-7">Testimonials</span>
                        <span className="mr-7">Help</span>
                    </div>
                    <div className="hidden lg:block">
                        <button className="font-bold mr-7 focus:outline-none">
                            Sign Up
                        </button>
                        <button className="px-7 py-1 focus:outline-none transition-all duration-500 font-semibold text-first border-first border-2 rounded-full hover:bg-first hover:text-white">
                            Sign In
                        </button>
                    </div>
                    <div className="block lg:hidden py-3 px-4 rounded-lg shadow-md hover:shadow transition-all duration-100">
                        <HiMenuAlt3 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
