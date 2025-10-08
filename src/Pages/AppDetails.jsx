import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../useApps';
import ratingIcon from '../assets/icon-ratings.png';
import downloadIcon from '../assets/icon-downloads.png';
import reviewIcon from '../assets/icon-review.png'

const AppDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const { apps, loading } = useApps()
    const app = apps.find(sApp => sApp.id == id)

    if(loading) {
        return <p className='min-h-screen'>Loading....</p>
    }
    return (
        <div className=' bg-gray-100 min-h-screen'>
            <div className="w-11/12 mx-auto pt-20 rounded-md overflow-hidden flex">

            <div className=" md:w-56 flex items-center justify-center bg-gray-50 p-6">
                <img src={app.image}
                    alt="app icon"
                    className="w-full h-full md:w-full md:h-full" />
            </div>


            <div className="flex-1 p-6 md:p-8">

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{app.title}</h2>
                <div className='flex'>
                    <p className="mt-2 text-sm text-gray-500">
                    Developed by
                    <p
                        className=" text-[#6C63FF] font-medium">{app.companyName}</p>
                </p>
                </div>

                <hr className="my-6 border-gray-200" />


                <div className="grid grid-cols-3 gap-6 items-center">

                    <div className="flex flex-col items-start">
                        <div className='mb-1'>
                            <img src={downloadIcon} alt="" />
                        </div>
                        <div className="flex items-center gap-2 text-green-600">
                            <span className="text-sm text-gray-500">Downloads</span>
                        </div>
                        <div className="mt-2 text-2xl font-bold text-gray-900">{app.downloads}</div>
                    </div>


                    <div className="flex flex-col items-start">
                        <div className='mb-1'>
                            <img src={ratingIcon} alt="" />
                        </div>
                        <div className="flex items-center gap-2 text-yellow-500">
                            <span className="text-sm text-gray-500">Average Ratings</span>
                        </div>
                        <div className="mt-2 text-2xl font-bold text-gray-900">{app.ratingAvg}</div>
                    </div>

                    <div className="flex flex-col items-start">
                        <div className='mb-1'>
                            <img src={reviewIcon} alt="" />
                        </div>
                        <div className="flex items-center gap-2 text-purple-600">

                            <span className="text-sm text-gray-500">Total Reviews</span>
                        </div>
                        <div className="mt-2 text-2xl font-bold text-gray-900">{app.reviews}</div>
                    </div>
                </div>


                <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                        <button className="bg-emerald-500 text-white font-semibold px-4 py-2 rounded-md flex items-center gap-3">
                            Install Now <span className="text-sm opacity-90">({app.size})</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppDetails;