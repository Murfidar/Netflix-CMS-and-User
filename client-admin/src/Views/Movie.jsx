import { useEffect } from "react";
import TableRow from "../components/TableRow";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGenreListAsync,
  fetchMovieListAsync,
  setMovie,
} from "../store/actions/actionsCreator";

export default function Movie() {
  const navigate = useNavigate();

  const { genreList } = useSelector((state) => state.genre);
  const { movieList, loading, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  async function handleDelete(data) {
    let url = "https://movie-api.murfidar.online/movies/" + data.id;

    const response = await fetch(url, {
      method: "delete",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    if (!response.ok) {
      console.log("ada yang salah");
      console.log(response);
    } else {
      dispatch(fetchMovieListAsync());
    }
  }

  useEffect(() => {
    dispatch(
      setMovie({
        title: "",
        synopsis: "",
        trailerUrl: "",
        imgUrl: "",
        rating: 0,
        genreId: 1,
        authorId: 0,
      })
    );
    dispatch(fetchMovieListAsync());
    dispatch(fetchGenreListAsync());
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div>
          <h1>{error}</h1>
        </div>
      ) : (
        <div className="hero bg-base-100 min-h-screen">
          <div className="hero-content">
            <div>
              <div className="hero-content ">
                <h1 className="font-mono font-bold text-white text-4xl">
                  Movies
                </h1>
                <button
                  className="btn btn-primary btn-xs sm:btn-sm md:btn-md"
                  onClick={() => {
                    navigate("/create-movies", { state: { genre: genreList } });
                  }}
                >
                  Add Movie
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="table bg-black">
                  <thead>
                    <tr className="font-mono text-white font-bold text-2xl">
                      <th>Title</th>
                      <th>Image</th>
                      <th>Genre</th>
                      <th>Rating</th>
                      <th>Author</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movieList.map((movie) => {
                      return (
                        <TableRow
                          key={movie.id}
                          movie={movie}
                          genre={genreList}
                          deleteFunc={handleDelete}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
