import {
  FETCH_MOVIE_LIST_FAILED,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILED,
  SET_MOVIE,
  HANDLE_MOVIE_DATA_REQUEST,
  HANDLE_MOVIE_DATA_SUCCESS,
  HANDLE_MOVIE_DATA_FAILED,
} from "../actions/actionsTypes";

const initialState = {
  movie: {
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl:  "",
    rating:  0,
    genreId: 1,
    authorId: 0,
  },
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
    case SET_MOVIE:
      return { ...state, movie: action.payload };
    case HANDLE_MOVIE_DATA_REQUEST:
      return { ...state, loading: true };
    case HANDLE_MOVIE_DATA_SUCCESS:
      return { ...state, loading: false, movie: action.payload };
    case HANDLE_MOVIE_DATA_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
