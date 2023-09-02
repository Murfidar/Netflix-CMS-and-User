import {
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_LIST_FAILED,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  movie: {},
  movieList: [],
  loading: true,
  error: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, loading: false, movie: action.payload };
    case FETCH_MOVIE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case FETCH_MOVIE_LIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIE_LIST_SUCCESS:
      return { ...state, loading: false, movieList: action.payload };
    case FETCH_MOVIE_LIST_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
