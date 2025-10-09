import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../useApps';
import ratingIcon from '../assets/icon-ratings.png';
import downloadIcon from '../assets/icon-downloads.png';
import reviewIcon from '../assets/icon-review.png'
import AppError from '../Components/AppError';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const [installed, setInstalled] = useState(false)
    const { id } = useParams()
    // console.log(id);
    const { apps, loading } = useApps()
    const app = apps.find(sApp => sApp.id == id)

    if (loading) {
        return <p className='min-h-screen'>Loading....</p>
    }
    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('Installed'))
        let updatedInstalledApps = []
        if (installedApps) {
            const duplicate = installedApps.some(apps => apps.id === app.id)
            if (duplicate) {
                return
            }
            updatedInstalledApps = [...installedApps, app]
        }
        else {
            updatedInstalledApps.push(app)
        }
        localStorage.setItem('Installed', JSON.stringify(updatedInstalledApps))
    }

    return (
        <div className=' bg-gray-100 min-h-screen inter'>
            <div className="w-11/12 mx-auto pt-20 rounded-md overflow-hidden flex">

                <div className="w-[350px] flex items-center rounded-md justify-center bg-gray-50 overflow-hidden">
                    <img src={app.image}
                        alt="app icon"
                        className="w-full h-full md:w-full md:h-100" />
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

                    <hr className="my-6 border-gray-300" />


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
                            <button
                                onClick={() => { handleInstall(); setInstalled(true); }} disabled={installed} className="bg-emerald-500 cursor-pointer text-white font-semibold px-4 py-2 rounded-md flex items-center gap-3">
                                {installed ? "Installed" : `Install Now (${app.size})`}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="my-6 w-11/12 mx-auto border-gray-300" />
            <div className='w-11/12 mx-auto mt-10 mb-10'>
                <h1 className='text-2xl font-medium mt-6'>
                    Rating
                </h1>
                <div className='h-96'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={app.ratings}
                            layout='vertical'
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type='number' />
                            <YAxis dataKey="name" type='category' />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#82ca9d" activeBar={<Rectangle fill="orange" stroke="yellow" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <hr className="pb-10 w-11/12 mx-auto border-gray-300" />
            <div className='w-11/12 mx-auto'>
                <h1 className='text-2xl font-medium pb-6'>
                    Description
                </h1>
                <p className='pb-20 text-[#627382]'>
                    {app.description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;