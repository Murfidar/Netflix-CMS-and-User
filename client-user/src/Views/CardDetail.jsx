import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieAsync } from "../store/actions/actionsCreator";

export default function CardDetail() {
  let { movieId } = useParams();
  const { movie, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieAsync(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-col w-full border-opacity-50">
          <div className="hero min-h-screen">
            <div className="hero-content">
              <div className="m-10 text-left">
                <h1 className="text-4xl font-mono py-10">{movie.title}</h1>
                <p className="text-5xl py-10"> Rating: {movie.rating}</p>
                <p className="text-white">{movie.synopsis}</p>
              </div>
              <img
                src={movie.imgUrl}
                alt={movie.title}
                className="max-w-sm rounded-lg"
              />
            </div>
          </div>
          <div className="divider"></div>
          <div className="hero min-h-fit">
            <div className="hero-content">
              <p>CAST</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="hero min-h-fit">
            <div className="hero-content items-center space-x-6">
              <h1 className="text-4xl px-20">Trailer</h1>
              <iframe
                width="560"
                height="315"
                src={movie.trailerUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
