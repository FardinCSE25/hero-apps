import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const TrendingApp = ({trendingApps}) => {
    console.log(trendingApps);
    
    return (
        <div className='bg-gray-100 inter pb-12'>
            <h1 className='pt-20 pb-6 font-bold text-5xl text-center'>
                Trending Apps
            </h1>
            <p className='text-gray-500 text-center pb-10'>
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className='w-11/12 mx-auto grid grid-cols-4 gap-4 bg-gray-100 pb-10'>
                {
                    trendingApps.map(apps => {
                        // console.log(apps);
                        
                     return (
                        <Link to={`/apps/${apps.id}`} key={apps.id} className='p-4 bg-white rounded-sm'>
                            <img className='pb-4 h-60 w-full overflow-hidden rounded-sm' src={apps.image} alt="app logo" />
                            <h1 className='pb-4'>
                                {apps.title}
                            </h1>
                            <div className='flex justify-between items-center pb-4'>
                                <div className='bg-gray-100 px-2 py-2 flex justify-between items-center rounded-lg text-[#00D390]'>
                                        <img className='w-[16px] h-[16px]' src={downloadIcon} alt="download logo" />
                                    <h1 className='ml-1'>
                                        {apps.downloads}
                                    </h1>
                                </div>
                                <div className='bg-gray-100 px-2 py-2 flex justify-between items-center rounded-lg text-[#FF8811]'>
                                    <img className='w-[16px] h-[16px]' src={ratingIcon} alt="star logo" />
                                    <h1 className='ml-1'>
                                        {apps.ratingAvg}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                     );
                    })
                }
            </div>
            <Link to={"/apps"} className='mx-[885px] px-9 py-5 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                Show All
            </Link>
        </div>
    );
};
export default TrendingApp;<h1>
</h1>