import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TableRow({ movie, genre, deleteFunc }) {
  function handleDelete() {
    movie ? deleteFunc(movie) : deleteFunc(genre);
  }

  return (
    <>
      {movie ? (
        <tr className="hover font-mono text-white font-bold text-lg">
          <td>{movie.title}</td>
          <td>
            <div className="avatar w-24 rounded-full">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
          </td>
          <td>{movie.genreId}</td>
          <td>{movie.rating}</td>
          <td>{movie.authorId}</td>
          <td className="space-x-6 items-center">
            <Link
              to={`/edit-movies/${movie.id}`}
              state={{ movie: movie, genre: genre }}
            >
              <button className="btn btn-info btn-xs sm:btn-sm md:btn-md ">
                Edit
              </button>
            </Link>
            <button
              className="btn btn-primary btn-xs sm:btn-sm md:btn-md"
              onClick={handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      ) : (
        <tr className="hover font-mono text-white font-bold text-lg">
          <td>{genre.name}</td>
          <td className="space-x-6 items-center">
            <Link to={`/edit-genres/${genre.id}`} state={genre}>
              <button className="btn btn-info btn-xs sm:btn-sm md:btn-md ">
                Edit
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-primary btn-xs sm:btn-sm md:btn-md "
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

TableRow.propTypes = {
  movie: PropTypes.object,
  genre: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  deleteFunc: PropTypes.func,
};
