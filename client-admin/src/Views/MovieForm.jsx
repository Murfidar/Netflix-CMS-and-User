import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchMovieAsync,
  fetchUserAsync,
  fetchGenreListAsync,
  fetchCastAsync,
  setMovie,
  setCast,
  addMovie,
  editMovie,
} from "../store/actions/actionsCreator";

export default function MovieForm() {
  let { id } = useParams();
  const {
    movie: { movie },
    user: { user },
    genre: { genreList, loading },
    cast: { cast },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeInput = ({ target: { name, value } }) => {
    dispatch(setMovie({ ...movie, [name]: value }));
  };

  const onChangeCastInput = ({ target: { id, name, value } }) => {
    dispatch(
      setCast({
        ...cast,
        [id]: { ...cast[id], [name]: value },
      })
    );
  };
  useEffect(() => {
    dispatch(
      setCast({
        0: "",
        1: "",
        2: "",
        3: "",
      })
    );

    dispatch(fetchUserAsync());
    dispatch(fetchGenreListAsync());
    if (id) {
      dispatch(fetchCastAsync(id));
      dispatch(fetchMovieAsync(id));
    } else dispatch(setMovie({ ...movie, authorId: user.id }));
  }, []);

  const handleAddMovie = async (e) => {
    e.preventDefault();
    await dispatch(addMovie(movie, cast));
    navigate("/");
  };

  const handleEditMovie = async (e) => {
    e.preventDefault();
    await dispatch(editMovie(movie, id, cast));
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Ini Halaman Create Movie</h1>
          <form>
            <label htmlFor="title">Title</label>
            <br />
            <input
              id="title"
              type="text"
              name="title"
              value={movie.title}
              onChange={onChangeInput}
            />
            <br />
            <label htmlFor="synopsis">Synopsis</label>
            <br />
            <input
              id="synopsis"
              type="text"
              name="synopsis"
              value={movie.synopsis}
              onChange={onChangeInput}
            />
            <br />
            <label htmlFor="trailerUrl">Trailer Url</label>
            <br />
            <input
              id="trailerUrl"
              type="text"
              name="trailerUrl"
              value={movie.trailerUrl}
              onChange={onChangeInput}
            />
            <br />
            <label htmlFor="imgUrl">Img Url</label>
            <br />
            <input
              id="imgUrl"
              type="text"
              name="imgUrl"
              value={movie.imgUrl}
              onChange={onChangeInput}
            />
            <br />
            <label htmlFor="rating">rating</label>
            <br />
            <input
              id="rating"
              type="number"
              name="rating"
              value={movie.rating}
              onChange={onChangeInput}
            />
            <br />
            <label htmlFor="genreId">genre</label>
            <br />
            <select
              name="genreId"
              value={movie.genreId}
              onChange={onChangeInput}
            >
              {genreList.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
            <br />
            <label htmlFor="cast">Cast</label>
            {typeof cast["0"] === "object"
              ? Object.keys(cast).map((el) => {
                  return (
                    <>
                      <br />
                      <input
                        id={el}
                        type="text"
                        name="name"
                        value={cast[el].name}
                        onChange={onChangeCastInput}
                      />
                      <br />
                      <input
                        id={el}
                        type="text"
                        name="profilePict"
                        value={cast[el].profilePict}
                        onChange={onChangeCastInput}
                      />
                      <br />
                    </>
                  );
                })
              : Object.keys(cast).map((el) => {
                  return (
                    <>
                      <br />
                      <input
                        id={el}
                        type="text"
                        name="name"
                        onChange={onChangeCastInput}
                      />
                      <br />
                      <input
                        id={el}
                        type="text"
                        name="profilePict"
                        onChange={onChangeCastInput}
                      />
                      <br />
                    </>
                  );
                })}
            {id ? (
              <input type="button" onClick={handleEditMovie} value="Edit" />
            ) : (
              <input type="button" onClick={handleAddMovie} value="Add" />
            )}
          </form>
        </div>
      )}
    </>
  );
}
