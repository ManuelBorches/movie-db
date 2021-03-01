import axios from 'axios';
import { SET_SUGGESTED_MOVIES, SET_MOVIES, SET_SINGLE_MOVIE, SET_BACK_TO_HOME, SET_RATING_FILTER } from '../constants';

const setSuggestedMovies = data => ({ type: SET_SUGGESTED_MOVIES, payload: data })
const setMovies = data => ({ type: SET_MOVIES, payload: data })
const setSingleMovie = data => ({ type: SET_SINGLE_MOVIE, payload: data })
export const setBackToHome = (data) => ({ type: SET_BACK_TO_HOME, payload: data })
export const setRatingFilter = (data) => ({ type: SET_RATING_FILTER, payload: data })

export const fetchSuggestedMovies = () => dispatch =>
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f0a09f3ad4b7e3e33ebbf193522f7ee6&sort_by=popularity.desc`)
    .then(res => dispatch(setSuggestedMovies(res.data.results)))

export const fetchMovies = (movieName) => dispatch =>
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f0a09f3ad4b7e3e33ebbf193522f7ee6&query=${movieName}`)
    .then(res => dispatch(setMovies(res.data.results)))

export const fetchSingleMovie = (movieId) => dispatch =>
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f0a09f3ad4b7e3e33ebbf193522f7ee6`)
    .then(res => dispatch(setSingleMovie(res.data)))
    


    // fetchSuggestedMovies
    // https://api.themoviedb.org/3/discover/movie?api_key=REACT_APP_MOVIEDB_API_KEY&sort_by=popularity.desc


    // fetchMovies
    // https://api.themoviedb.org/3/search/movie?api_key=REACT_APP_MOVIEDB_API_KEY&query=${movieName}
    // This will return a few fields, the one you want to look at is the results field. This is an array and will contain our standard movie list objects. 

    // fetchSingleMovie
    // With the item above in hand, you can see the id of the movie is 343611. You can use that id to query the movie details method:
    // https://api.themoviedb.org/3/movie/343611?api_key={api_key}