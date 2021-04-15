import React, { useRef } from 'react';
import { dataTesti } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimoni.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const TestimonialItem = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        dotClass: 'slick-dots',
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const next = () => sliderRef.current.slickNext();
    const prev = () => sliderRef.current.slickPrev();
    return (
        <div className='h-full mx-auto text-center flex flex-col mb-10 p-3 justify-between'>
            <Slider {...settings} ref={sliderRef}>
                {dataTesti.map((photo) => {
                    return (
                        <div className='focus:outline-none w-full p-3'>
                            <div className='rounded-lg bg-white border-2 border-gray-300 p-5 h-full'>
                                <div className='flex items-center'>
                                    <LazyLoadImage
                                        src={photo.image}
                                        className='w-10 mr-3'
                                        alt='Profile'
                                    />
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-sm'>
                                            {photo.name}
                                        </span>
                                        <span className='text-sm'>
                                            {photo.place}
                                        </span>
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
                    );
                })}
            </Slider>
            <div className='flex pt-5 ml-auto'>
                <button
                    className='p-4 mr-5 focus:outline-none border-2 border-first bg-white hover:bg-first text-first hover:text-white rounded-full'
                    onClick={prev}
                >
                    <FaArrowLeft />
                </button>
                <button
                    className='p-4 focus:outline-none border-2 border-first bg-white hover:bg-first text-first hover:text-white rounded-full'
                    onClick={next}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialItem;
