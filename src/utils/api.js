import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN
}

export const fetchApiData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params })
        return data;
    } catch (error) {
        console.log('Error From FetchApi', error);
        return error;
    }
}
