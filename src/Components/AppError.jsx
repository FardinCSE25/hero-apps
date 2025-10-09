import React from 'react';
import appError from '../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
        <>

            <div className='bg-gray-100'>
                <div className='w-[750px] mx-auto pt-32 pb-48 inter'>
                    <img className='pb-6 mx-auto' src={appError} alt="error" />
                    <h1 className='text-center font-semibold text-5xl mb-5'>
                        OPPS!! APP NOT FOUND
                    </h1>
                    <p className='text-center mb-8'>
                        The App you are requesting is not found on our system.  please try another apps
                    </p>
                    <div className='w-[117px] mx-auto'>
                        <Link to={"/apps"} className='text-center px-6 py-5 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                    Go Back!
                </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppError;