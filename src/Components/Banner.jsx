import React from 'react';
import '../../src/App.css'
import heroLogo from '../assets/hero.png'

const Hero = () => {
    return (
        <div className='bg-gray-100 inter'>
            <h1 className='text-7xl font-extrabold text-center pt-20 pb-5 leading-20'>
                We Build
                <br />
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text mr-3'>
                    Productive
                </span>
                Apps
            </h1>
            <p className='font-extralight text-gray-500 w-1/2 mx-auto text-center pb-10'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex gap-4 w-1/6 mx-auto pb-10'>
                <a href="https://play.google.com/store/games?hl=en" target="_blank" className='flex btn btn-ghost border border-gray-300 py-7'>
                    <img className='h-[32px] w-[32px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPq1phb64wZjcBqp-xZYD3am4svjU7U4p1Q&s" alt="Google Play logo" />
                    <h1>
                        Google Play
                    </h1>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" className='flex btn btn-ghost border border-gray-300 py-7'>
                    <img className=' h-[32px] w-[32px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png" alt="App Store logo" />
                    <h1>
                        App Store
                    </h1>
                </a>
            </div>
            <div className='w-1/2 mx-auto'>
                <img src={heroLogo} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;