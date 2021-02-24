import { SET_SUGGESTED_MOVIES, SET_MOVIES, SET_SINGLE_MOVIE, SET_BACK_TO_HOME, SET_RATING_FILTER } from '../constants';

const initialState = {
    suggested:[],
    search: [],               
    selected: {},
    ratingFilter: 0
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SUGGESTED_MOVIES:
            return { ...state, suggested: action.payload }
        case SET_MOVIES: 
            return { ...state, search: action.payload }
        case SET_SINGLE_MOVIE:
            return { ...state, selected: action.payload }
        case SET_BACK_TO_HOME:
            return { ...state, search: action.payload }
        case SET_RATING_FILTER:
            return { ...state, ratingFilter: action.payload }
        default:
            return state
    }
}

export default moviesReducer;