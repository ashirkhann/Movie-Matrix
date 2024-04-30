import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from 'dayjs';
import CircleRating from '../rating/Rating';
import { useNavigate } from 'react-router-dom';
import PlayIcon from '../playIcon/PlayIcon';
import noPoster from '../../assets/no-poster.jpeg'

const CardListing = ({ movies, loading, endpoint }) => {
  const { url } = useSelector(state => state.home);
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show multiple slides at once
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

    ]
  };

  return (
    <div>
      {!loading &&
        <Slider {...settings}>
          {movies?.map((movie) => {
            const posterUrl = movie.poster_path && `${url.poster}/${movie.poster_path}`;
            return (
              <div className="slide-container py-10" key={movie.id}>
                <div className="group card mx-2 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer relative" onClick={() => navigate(`/${movie.media_type || endpoint}/${movie.id}`)}>
                  <div className="poster relative bg-teal-700">
                    <img src={posterUrl || noPoster} alt={movie.name} className="w-full h-full"></img>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="play-icon opacity-0 group-hover:opacity-100">
                        <PlayIcon size='14' />
                      </div>
                    </div>
                    <div className="absolute -bottom-10 left-4">
                      <CircleRating rating={movie.vote_average.toFixed(1)} />
                    </div>
                  </div>
                  <div className="posterDetail mt-14 text-center">
                    <h3 className="font-bold text-xl">{movie.title || movie.name}</h3>
                    <span>{dayjs(movie.release_date).format('MMM D, YYYY')}</span>
                  </div>
                </div>


              </div>
            )
          })}
        </Slider>
      }
    </div>
  );
};

export default CardListing;
