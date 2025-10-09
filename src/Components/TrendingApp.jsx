import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const TrendingApp = ({trendingApps}) => {
    console.log(trendingApps);
    
    return (
        <div className='bg-gradient-to-br from-gray-50 to-gray-200 inter pb-12 min-h-screen'>
            <div className='pt-20 pb-6'>
                <h1 className='font-bold mb-4 text-5xl text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                    Trending Apps
                </h1>
                <p className='text-gray-600 text-center pb-10 mt-4 text-lg'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10'>
                {
                    trendingApps.map(apps => {
                     return (
                        <Link 
                            to={`/app/${apps.id}`} 
                            key={apps.id} 
                            className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2'
                        >
                            <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>
                            
                            <div className='relative z-10 p-6'>
                                <div className='relative overflow-hidden rounded-xl mb-6'>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'></div>
                                    <img
                                        className='w-full h-64 object-cover rounded-xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out'
                                        src={apps.image}
                                        alt="app logo"
                                    />
                                    <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500'>
                                        <span className='text-sm font-semibold text-gray-800'>View App</span>
                                    </div>
                                </div>
                                
                                <h1 className='text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300'>
                                    {apps.title}
                                </h1>
                                
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center bg-gray-100 px-4 py-2 rounded-xl group-hover:bg-purple-50 transition-colors duration-300'>
                                        <img className='w-5 h-5 transform group-hover:scale-110 transition-transform duration-300' src={downloadIcon} alt="download logo" />
                                        <span className='ml-2 font-semibold text-green-600'>
                                            {apps.downloads}
                                        </span>
                                    </div>
                                    <div className='flex items-center bg-gray-100 px-4 py-2 rounded-xl group-hover:bg-orange-50 transition-colors duration-300'>
                                        <img className='w-5 h-5 transform group-hover:scale-110 transition-transform duration-300' src={ratingIcon} alt="star logo" />
                                        <span className='ml-2 font-semibold text-orange-500'>
                                            {apps.ratingAvg}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                        </Link>
                     );
                    })
                }
            </div>
            
            <div className='flex justify-center mt-8'>
                <Link 
                    to={"/apps"} 
                    className='group relative px-12 py-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden'
                >
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <span className='relative z-10'>Show All</span>
                    <div className='absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApp;
