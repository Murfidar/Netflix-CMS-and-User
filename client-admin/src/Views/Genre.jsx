import { useEffect } from "react";
import TableRow from "../components/TableRow";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreListAsync } from "../store/actions/actionsCreator";

export default function Genre() {
  const navigate = useNavigate();

  const { genreList } = useSelector((state) => state.genre);
  const dispatch = useDispatch();

  async function handleDelete(data) {
    let url = "https://movie-api.murfidar.online/genres/" + data.id;

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
      console.log("masuk");
      dispatch(fetchGenreListAsync());
    }
  }

  useEffect(() => {
    dispatch(fetchGenreListAsync());
  }, []);

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content">
        <div>
          <div className="hero-content">
            <h1 className="font-mono font-bold text-white text-4xl">Genres</h1>
            <button
              className="btn btn-primary btn-xs sm:btn-sm md:btn-md"
              onClick={() => {
                navigate("/create-genres");
              }}
            >
              Add Genre
            </button>
          </div>
          <div className="overflox-x-auto">
            <table className="table bg-black">
              <thead>
                <tr className="font-mono text-white font-bold text-2xl">
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {genreList.map((item) => {
                  return (
                    <TableRow
                      key={item.id}
                      genre={item}
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
  );
}
