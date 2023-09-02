import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieListAsync } from "../store/actions/actionsCreator";

export default function Movie() {
  const { movieList, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieListAsync());
  }, [dispatch]);

  return (
    <main>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="m-20">
          <h1 className="font-bold text-6xl text-white">Film</h1>
          <p className="text-xl py-3 w-3/6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            sapiente voluptas aut consequatur nostrum? Tempore assumenda
            officiis saepe vero numquam?
          </p>
          <div>
            <p className="text-xl py-5 w-3/6 text-white">Rilis Baru</p>
            <div className="carousel w-full rounded-box carousel-center p-4 space-x-4 ">
              {movieList.movies.map((item) => {
                return (
                  <div
                    className="carousel-item w-2/12 sm:w-3/12 md:w-56 lg:w-64  "
                    key={item.id}
                  >
                    <Link to={`/movies/${item.id}`}>
                      <Card item={item} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xl py-5 w-3/6 text-white">Best Rating</p>
            <div className="carousel rounded-box w-full carousel-center max-w-full p-4 space-x-4 ">
              {movieList.movies.map((item) => {
                return (
                  <div className="carousel-item w-64" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                      <Card item={item} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xl py-5 w-3/6 text-white">Family Comedy</p>
            <div className="carousel rounded-box w-full carousel-center max-w-full p-4 space-x-4 ">
              {movieList.movies.map((item) => {
                return (
                  <div className="carousel-item w-64" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                      <Card item={item} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xl py-5 w-3/6 text-white">Drama</p>
            <div className="carousel rounded-box w-full carousel-center max-w-full p-4 space-x-4 ">
              {movieList.movies.map((item) => {
                return (
                  <div className="carousel-item w-64" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                      <Card item={item} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xl py-5 w-3/6 text-white">Action</p>
            <div className="carousel rounded-box w-full carousel-center max-w-full p-4 space-x-4 ">
              {movieList.movies.map((item) => {
                return (
                  <div className="carousel-item w-64" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                      <Card item={item} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xl py-5 w-3/6 text-white">History</p>
            <div className="carousel rounded-box w-full carousel-center max-w-full p-4 space-x-4 ">
              {movieList.movies.map((item) => {
                return (
                  <div className="carousel-item w-64" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                      <Card item={item} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hero">
            <div className="hero-content text-center">
              <div>
                <h1 className="text-3xl text-white py-5">
                  There&apos;s even more to watch
                </h1>
                <p className="text-2xl text-white py-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident nobis porro nam iure nulla consequuntur quia
                  voluptatem magni, veniam voluptatibus?
                </p>
                <button className=" text-white btn btn-primary ">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
