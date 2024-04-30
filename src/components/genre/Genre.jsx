import React from 'react'
import { useSelector } from 'react-redux'

const Genre = ({ genreIds }) => {
    const { genres } = useSelector(state => state.home)

    return (
        <span className='flex gap-2'>
            {genreIds?.map((genre, index) => {
                // if (!genres[genre]?.name) return;
                return (
                    <div key={index} className="genre bg-teal-600 rounded-lg px-3 py-1 inline-block sm:text-sm text-xs">
                        {genres[genre]?.name}
                    </div>
                )
            })}
        </span>
    )
}

export default Genre
