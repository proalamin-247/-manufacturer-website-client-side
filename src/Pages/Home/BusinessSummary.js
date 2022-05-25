import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FaMotorcycle } from 'react-icons/fa';
import { FcFactory } from 'react-icons/fc';
import { GiWorld } from 'react-icons/gi';

const BusinessSummary = () => {
    return (
        <div className='my-12 lg:mx-12 mt-12'>
            <h1 className='text-3xl my-12'>OUR 
                <span class="ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
                    <span class="relative text-white">ADVANTAGES</span>
                </span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                <div class="card w-80 bg-base-100 shadow-xl ">
                    <div class="card-body grid justify-items-center bg-zinc-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
                        <span className='text-8xl text-primary'><IoIosPeople /></span>
                        <h2 class="card-title">4000+ HAPPY CUSTOMERS</h2>
                        <p>We always try to happy our customers</p>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl ">
                    <div class="card-body grid justify-items-center bg-zinc-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
                        <span className='text-8xl text-primary'><FcFactory /></span>
                        <h2 class="card-title">600+ Products</h2>
                        <p>Our all products manufactures by our own factory</p>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl ">
                    <div class="card-body grid justify-items-center bg-zinc-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
                        <span className='text-8xl text-primary'><FaMotorcycle /></span>
                        <h2 class="card-title">16+ Brands Direct Client</h2>
                        <p>Market to motorcycle  brand your top client</p>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl ">
                    <div class="card-body grid justify-items-center bg-zinc-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
                        <span className='text-8xl text-primary'><GiWorld /></span>
                        <h2 class="card-title">72+ Country Export</h2>
                        <p>One-stop service is available</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BusinessSummary;