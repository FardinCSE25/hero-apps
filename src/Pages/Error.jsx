import React from 'react';
import { Link } from 'react-router';
import error from "../assets/error-404.png"

const Error = () => {
    return (
        <div>
            <img className='pb-16' src={error} alt="error" />
            <h1 className='pb-2'>
                Oops, page not found!
            </h1>
            <p className='pb-4'>
                The page you are looking for is not available.
            </p>
            <Link to={"/"} className='mx-[885px] px-9 py-5 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                Go Back
            </Link>
        </div>
    );
};

export default Error;