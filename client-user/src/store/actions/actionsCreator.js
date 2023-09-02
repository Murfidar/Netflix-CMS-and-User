import {
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_LIST_FAILED,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "./actionsTypes";

const baseUrl = "https://movie-api.murfidar.online/client";
// const baseUrl = "http://localhost:3000/client";

// movie
export const fetchMovieRequest = () => {
  return { type: FETCH_MOVIE_REQUEST };
};
export const fetchMovieSuccess = (payload) => {
  return { type: FETCH_MOVIE_SUCCESS, payload };
};
export const fetchMovieFailed = (payload) => {
  return { type: FETCH_MOVIE_FAILED, payload };
};

export const fetchMovieAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieRequest());
    fetch(`${baseUrl}/movies/` + id)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchMovieSuccess(data));
      })
      .catch((err) => fetchMovieFailed(err));
  };
};

export const fetchMovieListRequest = () => {
  return { type: FETCH_MOVIE_LIST_REQUEST };
};
export const fetchMovieListSuccess = (payload) => {
  return { type: FETCH_MOVIE_LIST_SUCCESS, payload };
};
export const fetchMovieListFailed = (payload) => {
  return { type: FETCH_MOVIE_LIST_FAILED, payload };
};

export const fetchMovieListAsync = () => {
  return (dispatch) => {
    dispatch(fetchMovieListRequest());
    fetch(`${baseUrl}/movies/`)
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovieListSuccess(data)))
      .catch((err) => fetchMovieListFailed(err));
  };
};
