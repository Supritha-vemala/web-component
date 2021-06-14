import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopRatedMovies } from "../services/services";

interface Props {}

export default function Home({}: Props): ReactElement {
  const dispatch = useDispatch();
  const movieState = useSelector((state: any) => state.movies);
  useEffect(() => {
    getTopRatedMovies(dispatch)
  }, []);
  return (
    <div style={{marginTop:"5%"}}>
      <div className="card-columns" style={{display:"inline-block"}}>
        {movieState.topMovies.map((movie: any) => {
          return (
            <Link to={'/movies/'+movie.imdbID}>
            <div className="card" style={{ width: "18rem",margin:"1rem",height:"10rem",maxHeight:"10rem",display:"inline-block"}}>
              <img
                className="card-img-top"
                src={movie.Poster}
                alt="Card image"
                height="250"
                width="350"   
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">
                  <small className="text-muted">Rating: {movie.imdbRating}</small>
                </p>
              </div>
            </div>
            </Link>
          );

        })}
      </div>
    </div>
  );
}
