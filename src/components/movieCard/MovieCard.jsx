// MovieCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayIcon from '../playIcon/PlayIcon';
import CircleRating from '../rating/Rating';
import dayjs from 'dayjs';
import noPoster from '../../assets/no-poster.jpeg'

const MovieCard = ({ movie, url, endpoint }) => {
    const navigate = useNavigate();

    const posterUrl = movie?.poster_path && `${url.poster}/${movie?.poster_path}`;

    const handleClick = () => {
        navigate(`/${movie.media_type || endpoint}/${movie?.id}`);
    };

    return (
        <>
            {movie ? (
                <div className="group card mx-2 sm:mx-0 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer relative text-white min-h[25vh] bg-teal-960" onClick={handleClick}>
                    <div className="poster relative bg-teal-800 sm:min-h-[30vh] min-h-[20vh]">
                        <img src={posterUrl || noPoster} alt={movie?.name} className="w-full h-full bg-teal-950 " />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="play-icon opacity-0 group-hover:opacity-100">
                                <PlayIcon size='14' />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 left-4 sm:left-2">
                            <CircleRating rating={movie?.vote_average?.toFixed(1)} />
                        </div>
                    </div>
                    <div className="posterDetail mt-10 p-2 sm:mt-6 text-center">
                        <h3 className="font-bold text-xl sm:text-lg">{movie?.title || movie?.name}</h3>
                        <span className="text-sm sm:text-xs">{dayjs(movie?.release_date).format('MMM D, YYYY')}</span>
                    </div>
                </div>
            ) : (
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 mx-5 cursor-pointer bg-teal-800 w-full">
                    <div className="animate-pulse">
                        <div className="w-full h-80 bg-teal-400"></div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 bg-teal-300 h-6 rounded"></div>
                            <p className="text-gray-300 text-base bg-teal-300 h-4 rounded"></p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieCard;
