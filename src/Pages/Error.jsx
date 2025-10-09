import React from 'react';
import { Link } from 'react-router';
import error from "../assets/error-404.png"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error = () => {
    return (
        <>
        <Navbar/>
        <div className='w-1/4 mx-auto pt-20 pb-10 text-center'>
            <img className='pb-16' src={error} alt="error" />
            <h1 className='pb-2'>
                Oops, page not found!
            </h1>
            <p className='pb-4'>
                The page you are looking for is not available.
            </p>
            <Link to={"/"} className=' px-9 py-5 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                Go Back
            </Link>
        </div>
        <Footer/>
        </>
    );
};

export default Error;