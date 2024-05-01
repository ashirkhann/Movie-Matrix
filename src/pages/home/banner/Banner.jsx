import React, { useEffect, useState, } from 'react';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Rating from '../../../components/rating/Rating'
import Genre from '../../../components/genre/Genre';
import PlayIcon from '../../../components/playIcon/PlayIcon';
import VideoPopup from '../../../components/videoPlay/VideoPlay';
import noImg from '../../../assets/no-image.png'

const Banner = () => {

    const [background, setBackground] = useState('');
    const [movieDetail, setMovieDetail] = useState('');
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { data, loading } = useFetch('/movie/upcoming');
    const { url } = useSelector(state => state.home);

    useEffect(() => {
        const bannerMovie = data?.results[Math.floor(Math.random() * 20)];
        const bg = ('https://image.tmdb.org/t/p/original') + bannerMovie?.backdrop_path;
        setMovieDetail(bannerMovie);
        setVideoId(bannerMovie?.id)
        setBackground(bg);
    }, [data]);


    return (

        <div className='w-full h-full min-h-auto bg-teal-800 text-white  z-0 overflow-hidden'>
            {loading && !background ? (
                <div className="spinner w-screen h-screen flex items-center justify-center bg-teal-800 animate-spin">
                    <div className="h-20 w-20 border-t-4 border-b-4 border-teal-200 rounded-full"></div>
                </div>
            ) : (
                <div className="relative  ">
                    <img src={background || noImg} alt={movieDetail?.title || movieDetail?.name} className='w-full h-auto' />
                    <div className=" absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                    {/* content */}
                    <div className='content absolute md:top-24 top-6 md:left-20 left-6 md:w-1/2 w-full mr-4'>
                        <div className="title lg:text-6xl md:text-4xl text-2xl font-bold font-sans md:mb-3">
                            {movieDetail?.title || movieDetail?.name || 'Loading...'}
                        </div>
                        <div className="title lg:text-2xl md:text-xl sm:text-lg text-xs font-sans sm:block hidden md:mb-5">
                            {`${movieDetail?.overview?.slice(0, 100)}... ${movieDetail?.overview ?? '...'}`}

                        </div>
                        <div className="start-rating sm:my-4 my-2 flex sm:gap-4 gap-2">
                            <Rating rating={movieDetail?.vote_average?.toFixed(1)} />
                            <div className='playicon flex items-center'
                                onClick={() => {
                                    setShow(true)
                                }}>
                                <PlayIcon size='14' />
                                <span className='text-xl font-bold mx-2 hover:text-teal-500 transition-colors ease-in duration-150 cursor-pointer'>Watch Trailer</span>
                            </div>
                        </div>
                        <div className="genres sm:my-4 my-2">
                            <Genre genreIds={movieDetail?.genre_ids} />
                        </div>

                    </div>
                    <VideoPopup
                        show={show}
                        setShow={setShow}
                        videoId={videoId}
                        setVideoId={setVideoId} />
                </div>
            )}
        </div>

    );
};

export default Banner;
