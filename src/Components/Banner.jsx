import React from 'react';
import '../../src/App.css'

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inter'>
            <h1 className='pt-20 text-white text-6xl font-bold text-center pb-10'>
                Trusted by Millions, Built for You
            </h1>
            <div className='text-white w-1/3 mx-auto flex gap-25 pb-20'>
                <div className='text-center'>
                    <p className='text-xs font-light'>
                        Total Downloads
                    </p>
                    <h1 className='py-4 text-6xl'>
                        127.6M
                    </h1>
                    <p className='text-xs font-light'>
                        21% more than last month
                    </p>
                </div>
                <div className='text-center'>
                    <p className='text-xs font-light'>
                        Total Reviews
                    </p>
                    <h1 className='py-4 text-6xl'>
                        29.6M
                    </h1>
                    <p className='text-xs font-light'>
                        21% more than last month
                    </p>
                </div>
                <div className='text-center'>
                    <p className='text-xs font-light'>
                        Active Apps
                    </p>
                    <h1 className='py-4 text-6xl'>
                        20+
                    </h1>
                    <p className='text-xs font-light'>
                        8 more will Launch
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;