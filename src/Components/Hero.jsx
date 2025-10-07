import React from 'react';
import '../../src/App.css'

const Hero = () => {
    return (
        <div className='bg-gray-100 inter'>
            <h1 className='text-7xl font-extrabold text-center p-20 leading-20'>
                We Build 
                <br />
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text mr-3'>
                Productive
                </span>
                Apps
            </h1>
        </div>
    );
};

export default Hero;