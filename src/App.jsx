//react
import { useEffect, } from 'react'
import './App.css'
//store
import { useSelector, useDispatch } from 'react-redux'
//api
import { fetchApiData } from './utils/api'
import { getApiConfiguration, getGenres } from './store/homeSlice';
//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ExploreMovies from './pages/explore/ExploreMovies'
import ExploreShows from './pages/explore/ExploreShows'
import Trending from './pages/explore/Trending'
import SearchMedia from './pages/searchMedia/SearchMedia';
//router
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  useEffect(() => {
    fetchApiConfig();
    genreCall()
  }, [])


  const fetchApiConfig = () => {
    fetchApiData('/configuration')
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + 'original',
          poster: res.images.secure_base_url + 'original',
          profile: res.images.secure_base_url + 'original',
        }
        dispatch(getApiConfiguration(url))
      })
  }

  const genreCall = async () => {
    let promises = []
    let endPoints = ['tv', 'movie']
    let allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchApiData(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres))
  }


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<MovieDetails />} />
        <Route path='/search/:query' element={<SearchMedia />} />
        <Route path='/explore/movie' element={<ExploreMovies />} />
        <Route path='/explore/tv' element={<ExploreShows />} />
        <Route path='/explore/trending' element={<Trending />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
