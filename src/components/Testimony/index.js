import React from 'react'

export default function Testimony() {
    return (
        <div className="container mx-auto px-10 lg:px-20 my-10" id="testimoni">
            <div className="lg:w-1/2 w-full mx-auto text-center flex flex-col mb-10">
                <span className="xl:text-5xl text-3xl font-semibold">Trusted by Thousands of Happy Customer</span>
                <span className="text-base mt-10">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</span>
            </div>
            <div className="">
                <div className="flex overflow-hidden">
                    <div className="w-1/3 rounded-lg bg-white border-2 border-gray-400">a</div>
                    <div className="w-1/3 rounded-lg bg-white border-2 border-gray-400">a</div>
                    <div className="w-1/3 rounded-lg bg-white border-2 border-gray-400">a</div>
                    <div className="w-1/3 rounded-lg bg-white border-2 border-gray-400">a</div>
                    <div className="w-1/3 rounded-lg bg-white border-2 border-gray-400">a</div>
                </div>
            </div>
        </div>
    )
}
