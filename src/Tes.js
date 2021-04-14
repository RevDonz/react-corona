import React from 'react'
import Testi from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaStar } from 'react-icons/fa';

export default function Tes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="">
            <Slider {...settings}>
                {Testi.map((photo) => {
                    return (
                        <div className="p-5">
                            <div className='rounded-lg bg-white border-2 border-gray-300 p-5'>
                                <div className='flex items-center'>
                                    <LazyLoadImage
                                        src={photo.image}
                                        className='w-10 mr-3'
                                    />
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-sm'>
                                            {photo.name}
                                        </span>
                                        <span className='text-sm'>{photo.place}</span>
                                    </div>
                                    <div className='flex ml-auto items-center '>
                                        <span className='text-sm font-semibold mr-1'>
                                            {photo.rating}
                                        </span>
                                        <FaStar className='text-yellow-400' />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <span className='text-sm font-medium'>
                                        "{photo.comment}"
                                    </span>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
