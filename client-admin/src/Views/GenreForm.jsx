import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchGenreAsync,
  setGenre,
  addGenre,
  editGenre,
} from "../store/actions/actionsCreator";

export default function GenreForm() {
  let { id } = useParams();
  const { genre, loading } = useSelector((state) => state.genre);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeGenreInput = ({ target: { value } }) => {
    dispatch(setGenre({ ...genre, name: value }));
  };

  const handleAddGenre = async (e) => {
    e.preventDefault();
    await dispatch(addGenre(genre));
    navigate("/genres");
  };

  const handleEditGenre = async (e) => {
    e.preventDefault();
    await dispatch(editGenre(genre, id));
    navigate("/genres");
  };

  useEffect(() => {
    if (id) dispatch(fetchGenreAsync(id));
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Ini Halaman Create Genre</h1>
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              value={genre.name}
              onChange={onChangeGenreInput}
            />
            <br />
            {id ? (
              <input type="button" onClick={handleEditGenre} value="Edit" />
            ) : (
              <input type="button" onClick={handleAddGenre} value="Add" />
            )}
          </form>
        </div>
      )}
    </>
  );
}
