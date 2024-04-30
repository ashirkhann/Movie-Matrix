import React from 'react'
import Banner from './banner/Banner'
import Popular from './popular/Popular'
import NowPlaying from './nowPlaying/NowPlaying'

const Home = () => {

  return (
    <>
      <Banner  />
      <NowPlaying />
      <Popular />
    </>
  )
}

export default Home
