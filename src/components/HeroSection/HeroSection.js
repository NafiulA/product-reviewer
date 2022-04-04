import React from 'react';
import laptop from '../../assets/images/laptop.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 items-center heroSection md:min-h-screen'>
            <div className='col-span-1 order-2 md:col-span-2 md:order-1'>
                <div className='my-10 md:my-20 pl-6'>
                    <h1 className='text-6xl md:text-8xl text-slate-800'>Your perfect partner!</h1>
                    <p className='text-2xl pt-6 details-text'>Expand your creative and gaming horizons with the groundbreaking Zephyrus Duo 15, which features a ROG ScreenPad Plus secondary display that takes the Windows 10 experience to new heights. Innovative cooling with liquid metal and a groundbreaking thermal design unleashes peak power from the latest product.</p>
                    <button className='px-4 py-2 mt-6 text-3xl bg-slate-400 rounded-2xl viewBtn'>View Demo</button>
                </div>
            </div>
            <div className='order-1 md:order-2 hover:overflow-hidden'>
                <img className='hover:scale-125 duration-500 ease-in' src={laptop} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;