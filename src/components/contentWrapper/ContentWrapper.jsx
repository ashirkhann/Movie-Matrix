import React from 'react'

const ContentWrapper = ({ children }) => {
    return (
        <div className='content-wrapper lg-px-14 md:px-12 sm:px-10 px-4'>
            {children}
        </div>
    )
}

export default ContentWrapper
