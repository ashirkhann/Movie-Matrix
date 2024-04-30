import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import dayjs from 'dayjs'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Rating from '../../../components/rating/Rating'
import Genre from '../../../components/genre/Genre'
import { useSelector } from 'react-redux'
import PlayIcon from '../../../components/playIcon/PlayIcon'
import VideoPopup from '../../../components/videoPlay/VideoPlay'
import noPoster from '../../../assets/no-poster.jpeg';

const Hero = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`)

  const { url } = useSelector(state => state.home);

  useEffect(() => {
    setVideoId(id)
  }, [data]);



  return (

    <div className='w-full h-full text-white z-0 overflow-hidden'>
      {loading ? (
        <div className="skeleton w-screen h-screen bg-teal-800 animate-pulse"></div>
      ) : (

        <div className='Hero  py-10 text-white relative' style={{ backgroundImage: `url(${url?.backdrop}/${data?.backdrop_path})`, backgroundSize: 'cover', objectFit: 'contain' }}>
          {/* Black mask layer */}
          <div className="absolute  bottom-0 w-full h-full bg-black opacity-70 z-0"></div>

          <ContentWrapper >
            <div className='content relative md:flex gap-6  z-10'>

              {/* left side */}
              <div className="z-10">
                {data?.poster_path ? (
                  <div className="poster w-full sm:w-[40vh]">
                    <img src={url.backdrop + data.poster_path || noPoster} />
                  </div>
                ) : (
                  <div className='w-full sm:w-[40vh] h-96 bg-teal-950'></div>
                )}
              </div>

              {/* right side */}
              <div className='mr-10 z-10'>
                <div className="title lg:text-6xl md:text-4xl text-2xl font-bold font-sans md:mb-3">
                  {data?.title || data?.name}
                </div>
                <div className="subtitle text-xl font-">{data?.tagline}</div>
                <span className="genres inline-block mt-4 mb-2">
                  <Genre genreIds={data?.genres?.map((genre) => genre.id)} />
                </span>
                <div className="rating sm:my-4 my-2 flex sm:gap-4 gap-2">
                  <Rating rating={data?.vote_average.toFixed(1)} />
                  <div className='playicon flex items-center'
                    onClick={() => {
                      setShow(true)
                    }}>
                    <PlayIcon size='14' />
                    <span className='text-xl font-bold mx-2 hover:text-teal-500 transition-colors ease-in duration-150 cursor-pointer'>Watch Trailer</span>
                  </div>
                </div>
                
                <div className="overview md:text-xl sm:text-lg text-xs font-sans md:mb-5">
                  <h1 className='font-bold text-2xl'>Overview</h1>
                  {`${data?.overview}`}
                </div>
                <div className="info">
                  {data?.status && (
                    <div className="infoItem">
                      <span className="font-bold">Status: </span>
                      <span className="text">{data.status}</span>
                    </div>
                  )}
                  {data?.release_date && (
                    <div className="infoItem">
                      <span className="font-bold">Release Date: </span>
                      <span className="text">{dayjs(data.release_date).format("MMM D, YYYY")}</span>
                    </div>
                  )}
                  {data?.runtime && (
                    <div className="infoItem">
                      <span className="font-bold">Runtime: </span>
                      <span className="text">{data.runtime}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ContentWrapper>

          <VideoPopup
                      show={show}
                      setShow={setShow}
                      videoId={videoId}
                      setVideoId={setVideoId} />
        </div>
      )}
    </div>

    // <div></div>
  );
};

export default Hero;
