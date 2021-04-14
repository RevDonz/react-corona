import React from 'react'
import { AboutIMG, Amazon, Discord, Netflix, Reddit, Spotify } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function About() {
    return (
        <div className="container mx-auto px-10 lg:px-20 my-10" id="about">
            <div className="lg:w-1/2 w-full mx-auto text-center flex flex-col mb-10">
                <span className="xl:text-5xl text-3xl font-semibold">Huge Global Network of Fast VPN</span>
                <span className="text-base mt-10">See <span className="font-semibold">LaslesVPN</span> everywhere to make it easier for you when you move locations.</span>
            </div>
            <LazyLoadImage src={AboutIMG} alt="Global Map" className="mx-auto pt-5 lg:w-3/4" width="100%" />
            <div className="flex flex-wrap justify-center items-center pt-5">
                <div className="p-5  xl:w-1/5 md:w-1/3 w-1/3">
                    <LazyLoadImage src={Netflix} alt="Netflix" className="grayscale hover:grayscale-0 opacity-25 filter hover:opacity-100 transition-all duration-300" width="100%" />
                </div>
                <div className="p-5 xl:w-1/5 md:w-1/3 w-1/3">
                    <LazyLoadImage src={Reddit} alt="Reddit" className="grayscale hover:grayscale-0 opacity-25 filter hover:opacity-100 transition-all duration-300" width="100%" />
                </div>
                <div className="p-5 xl:w-1/5 md:w-1/3 w-1/3">
                    <LazyLoadImage src={Amazon} alt="Amazon" className="grayscale hover:grayscale-0 opacity-25 filter hover:opacity-100 transition-all duration-300" width="100%" />
                </div>
                <div className="p-5 xl:w-1/5 md:w-1/3 w-1/3">
                    <LazyLoadImage src={Discord} alt="Discord" className="grayscale hover:grayscale-0 opacity-25 filter hover:opacity-100 transition-all duration-300" width="100%" />
                </div>
                <div className="p-5 xl:w-1/5 md:w-1/3 w-1/3">
                    <LazyLoadImage src={Spotify} alt="Spotify" className="grayscale hover:grayscale-0 opacity-25 filter hover:opacity-100 transition-all duration-300" width="100%" />
                </div>
            </div>
        </div>
    )
}
