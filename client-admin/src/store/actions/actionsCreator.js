import {
  FETCH_GENRE_FAILED,
  FETCH_GENRE_LIST_FAILED,
  FETCH_GENRE_LIST_REQUEST,
  FETCH_GENRE_LIST_SUCCESS,
  FETCH_GENRE_REQUEST,
  FETCH_GENRE_SUCCESS,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_LIST_FAILED,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SET_MOVIE,
  HANDLE_MOVIE_DATA_REQUEST,
  HANDLE_MOVIE_DATA_SUCCESS,
  HANDLE_MOVIE_DATA_FAILED,
  SET_GENRE,
  HANDLE_GENRE_DATA_REQUEST,
  HANDLE_GENRE_DATA_SUCCESS,
  HANDLE_GENRE_DATA_FAILED,
  SET_CAST,
  FETCH_CAST_REQUEST,
  FETCH_CAST_SUCCESS,
  FETCH_CAST_FAILED,
} from "./actionsTypes";

const baseUrl = "https://movie-api.murfidar.online";
// const baseUrl = "http://localhost:3000";

// user

export const fetchUserRequest = () => {
  return { type: FETCH_USER_REQUEST };
};
export const fetchUserSuccess = (payload) => {
  return { type: FETCH_USER_SUCCESS, payload };
};
export const fetchUserFailed = (payload) => {
  return { type: FETCH_USER_FAILED, payload };
};

// fetch data user
export const fetchUserAsync = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    let options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    };
    fetch(`${baseUrl}/users/`, options)
      .then((res) => res.json())
      .then((data) => dispatch(fetchUserSuccess(data)))
      .catch((err) => dispatch(fetchUserFailed(err)));
  };
};

// genre
export const fetchGenreRequest = () => {
  return { type: FETCH_GENRE_REQUEST };
};
export const fetchGenreSuccess = (payload) => {
  return { type: FETCH_GENRE_SUCCESS, payload };
};
export const fetchGenreFailed = (payload) => {
  return { type: FETCH_GENRE_FAILED, payload };
};

// fetch data genre by id
export const fetchGenreAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchGenreRequest());
    let options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    };
    fetch(`${baseUrl}/genres/` + id, options)
      .then((res) => res.json())
      .then((data) => dispatch(fetchGenreSuccess(data)))
      .catch((err) => dispatch(fetchGenreFailed(err)));
  };
};

export const fetchGenreListRequest = () => {
  return { type: FETCH_GENRE_LIST_REQUEST };
};
export const fetchGenreListSuccess = (payload) => {
  return { type: FETCH_GENRE_LIST_SUCCESS, payload };
};
export const fetchGenreListFailed = (payload) => {
  return { type: FETCH_GENRE_LIST_FAILED, payload };
};

// fetch data genres
export const fetchGenreListAsync = () => {
  return (dispatch) => {
    dispatch(fetchGenreListRequest());

    let options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    };

    fetch(`${baseUrl}/genres`, options)
      .then((res) => res.json())
      .then((data) => dispatch(fetchGenreListSuccess(data)))
      .catch((err) => dispatch(fetchGenreListFailed(err)));
  };
};

// Handle genre data
export const setGenre = (payload) => {
  return { type: SET_GENRE, payload };
};

export const handleGenreRequest = () => {
  return { type: HANDLE_GENRE_DATA_REQUEST };
};
export const handleGenreSuccess = (payload) => {
  return { type: HANDLE_GENRE_DATA_SUCCESS, payload };
};
export const handleGenreFailed = (payload) => {
  return { type: HANDLE_GENRE_DATA_FAILED, payload };
};

// add genre
export const addGenre = (genre) => {
  return async (dispatch) => {
    dispatch(handleGenreRequest());
    try {
      let options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(genre),
      };

      await fetch(`${baseUrl}/genres`, options);
      dispatch(
        handleGenreSuccess({
          name: "",
        })
      );
    } catch (error) {
      dispatch(handleGenreFailed(error));
    }
  };
};

// Edit genre
export const editGenre = (genre, id) => {
  return async (dispatch) => {
    dispatch(handleGenreRequest());
    try {
      let options = {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(genre),
      };

      await fetch(`${baseUrl}/genres/` + id, options);
      dispatch(
        handleGenreSuccess({
          name: "",
        })
      );
    } catch (error) {
      dispatch(handleGenreFailed(error));
    }
  };
};

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

// fetch data movie by id
export const fetchMovieAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieRequest());
    let options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    };
    fetch(`h${baseUrl}/movies/` + id, options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchMovieSuccess(data));
      })
      .catch((err) => dispatch(fetchMovieFailed(err)));
  };
};

// fetch data movies
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
    let options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    };
    fetch(`${baseUrl}/movies`, options)
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovieListSuccess(data)))
      .catch((err) => dispatch(fetchMovieListFailed(err)));
  };
};

// Handle movie data
export const setMovie = (payload) => {
  return { type: SET_MOVIE, payload };
};

export const handleMovieRequest = () => {
  return { type: HANDLE_MOVIE_DATA_REQUEST };
};
export const handleMovieSuccess = (payload) => {
  return { type: HANDLE_MOVIE_DATA_SUCCESS, payload };
};
export const handleMovieFailed = (payload) => {
  return { type: HANDLE_MOVIE_DATA_FAILED, payload };
};

// add movie
export const addMovie = (movie, cast) => {
  return async (dispatch) => {
    dispatch(handleMovieRequest());
    movie.cast = Object.values(cast);
    try {
      let options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(movie),
      };

      await fetch(`${baseUrl}/movies`, options);
      dispatch(
        handleMovieSuccess({
          title: "",
          synopsis: "",
          trailerUrl: "",
          imgUrl: "",
          rating: 0,
          genreId: 1,
          authorId: 0,
        })
      );
    } catch (error) {
      dispatch(handleMovieFailed(error));
    }
  };
};

// Edit movie
export const editMovie = (movie, id, cast) => {
  return async (dispatch) => {
    dispatch(handleMovieRequest());
    movie.cast = Object.values(cast);
    try {
      let options = {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(movie),
      };

      await fetch(`${baseUrl}/movies/` + id, options);
      dispatch(
        handleMovieSuccess({
          title: "",
          synopsis: "",
          trailerUrl: "",
          imgUrl: "",
          rating: 0,
          genreId: 1,
          authorId: 0,
        })
      );
    } catch (error) {
      dispatch(handleMovieFailed(error));
    }
  };
};

// cast

export const setCast = (payload) => {
  return { type: SET_CAST, payload };
};

export const fetchCastRequest = () => {
  return { type: FETCH_CAST_REQUEST };
};
export const fetchCastSuccess = (payload) => {
  return { type: FETCH_CAST_SUCCESS, payload };
};
export const fetchCastFailed = (payload) => {
  return { type: FETCH_CAST_FAILED, payload };
};

// fetch data cast by movieId
export const fetchCastAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchCastRequest());
    let options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    };
    fetch(`${baseUrl}/casts/` + id, options)
      .then((res) => res.json())
      .then((data) => dispatch(fetchCastSuccess(Object.assign({}, data))))
      .catch((err) => dispatch(fetchCastFailed(err)));
  };
};
