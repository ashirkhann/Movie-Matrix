import React from 'react'

const Skeleton = () => {
    return (
        <div className='flex w-full'>
            <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 mx-5 cursor-pointer bg-teal-800 w-full">
                <div className="animate-pulse">
                    <div className="w-full h-80 bg-teal-400"></div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-teal-300 h-6 rounded"></div>
                        <p className="text-gray-300 text-base bg-teal-300 h-4 rounded"></p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 mx-5 cursor-pointer bg-teal-800 w-full">
                <div className="animate-pulse">
                    <div className="w-full h-80 bg-teal-400"></div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-teal-300 h-6 rounded"></div>
                        <p className="text-gray-300 text-base bg-teal-300 h-4 rounded"></p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 mx-5 cursor-pointer bg-teal-800 w-full sm:block hidden">
                <div className="animate-pulse">
                    <div className="w-full h-80 bg-teal-400"></div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-teal-300 h-6 rounded"></div>
                        <p className="text-gray-300 text-base bg-teal-300 h-4 rounded"></p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 mx-5 cursor-pointer bg-teal-800 w-full md:block hidden">
                <div className="animate-pulse">
                    <div className="w-full h-80 bg-teal-400"></div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-teal-300 h-6 rounded"></div>
                        <p className="text-gray-300 text-base bg-teal-300 h-4 rounded"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton
