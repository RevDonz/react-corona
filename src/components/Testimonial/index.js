import TestimonialItem from '../TestimonialItem'

const Testimonial = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 my-10' id='testimoni'>
            <div className='lg:w-1/2 w-full mx-auto text-center flex flex-col mb-10'>
                <span className='xl:text-5xl text-3xl font-semibold'>
                    Trusted by Thousands of Happy Customer
                </span>
                <span className='text-base mt-10'>
                    These are the stories of our customers who have joined us
                    with great pleasure when using this crazy feature.
                </span>
            </div>
            <div className="">
                <TestimonialItem />
            </div>
        </div>
    );
}

export default Testimonial