import {
  FETCH_GENRE_FAILED,
  FETCH_GENRE_LIST_FAILED,
  FETCH_GENRE_LIST_REQUEST,
  FETCH_GENRE_LIST_SUCCESS,
  FETCH_GENRE_REQUEST,
  FETCH_GENRE_SUCCESS,
  SET_GENRE,
  HANDLE_GENRE_DATA_REQUEST,
  HANDLE_GENRE_DATA_SUCCESS,
  HANDLE_GENRE_DATA_FAILED,
} from "../actions/actionsTypes";

const initialState = {
  genreList: [],
  genre: { name: "" },
  loading: false,
  error: null,
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRE_REQUEST:
      return { ...state, loading: true };
    case FETCH_GENRE_SUCCESS:
      return { ...state, loading: false, genre: action.payload };
    case FETCH_GENRE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case FETCH_GENRE_LIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_GENRE_LIST_SUCCESS:
      return { ...state, loading: false, genreList: action.payload };
    case FETCH_GENRE_LIST_FAILED:
      return { ...state, loading: false, error: action.payload };
    case SET_GENRE:
      return { ...state, genre: action.payload };
    case HANDLE_GENRE_DATA_REQUEST:
      return { ...state, loading: true };
    case HANDLE_GENRE_DATA_SUCCESS:
      return { ...state, loading: false, genre: action.payload };
    case HANDLE_GENRE_DATA_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
