import React from 'react';
import { FaPlay } from 'react-icons/fa';

const PlayIcon = ({ size, color }) => {
    return (
        <div className={`flex items-center justify-center md:w-16 sm:w-12 w-8 md:h-16 sm:h-12 h-8 rounded-full bg-teal-500 bg-opacity-50  sm:text-2xl text-sm hover:scale-110 transition-transform ease-in-out duration-150 cursor-pointer`}>
            <FaPlay  />
        </div>
    );
};

export default PlayIcon;
