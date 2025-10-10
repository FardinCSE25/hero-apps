import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex flex-col items-center h-screen">
                <div className="w-16 h-16 my-auto border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <div className="mt-4 text-xl text-gray-700">Loading...</div>
            </div>
        </div>
    );
};

export default Loading;