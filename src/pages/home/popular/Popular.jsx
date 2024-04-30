import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import CardListing from '../../../components/cardListing/CardListing';
import Skeleton from '../../../components/sliderSkeleon/Skeleton'
import { Link } from 'react-router-dom';


const Popular = () => {
    const { data, loading } = useFetch(`/movie/top_rated`);
    

    return (
        <div className='popularSection w-full h-full py-10  text-white relative overflow-x-hidden '>
            <ContentWrapper>
                <div className='carouselHead flex my-2 items-center justify-between'>
                    <span className='text-2xl font-bold'>Top Rated Movies</span>
                    <Link to='/explore/movie'  className='text-lg font-bold text-teal-500 hover:text-xl transition-all ease-in duration-100 cursor-pointer'>View all &gt;</Link>
                </div>
                {!loading && data && (
                    <CardListing movies={data.results} loading={loading} endpoint='movie' />
                )}
                {loading &&
                    <div className="flex">
                        <Skeleton />
                    </div>
                }
            </ContentWrapper>
        </div>
    );
};

export default Popular;
