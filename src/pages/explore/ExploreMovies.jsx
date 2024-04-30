import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/movieCard/MovieCard';

const Explore = ({ endpoint = 'movie' }) => {
    const { url } = useSelector(state => state.home);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const { data, loading } = useFetch(`/discover/${endpoint}?page=${page}`);

    useEffect(() => {
        if (!loading && data?.results) {
            setMovies(prevMovies => [...prevMovies, ...data.results]);
        }
    }, [loading, data]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="container mx-auto px-4 my-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10  "> {/* Adjusted gap values */}
                {loading && (
                    Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} className="skeleton max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 mx-5 cursor-pointer bg-teal-800 w-full">
                            <div className="animate-pulse">
                                <div className="w-full h-80 bg-teal-400"></div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 bg-teal-300 h-6 rounded"></div>
                                    <p className="text-gray-300 text-base bg-teal-300 h-4 rounded"></p>
                                </div>
                            </div>
                        </div>
                    ))
                )}


                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movie={movie}
                        url={url}
                        endpoint={endpoint}
                        onClick={() => navigate(`/${movie.media_type || endpoint}/${movie?.id}`)}
                    />
                ))}
            </div>
            
            {/* Render "Load More" button */}
            {!loading && data?.results.length > 0 && (
                <div className="flex w-full">
                    <button
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={handleLoadMore}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>

    );
};

export default Explore;
