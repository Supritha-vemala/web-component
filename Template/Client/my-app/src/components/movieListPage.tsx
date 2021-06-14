import { Alert } from "@material-ui/lab";
import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getMoviesByText } from "../services/services";

interface Props {}

export default function MovieListPage({}: Props): ReactElement {
  const {search}=useLocation()
  const searchParams=new URLSearchParams(search)
  const q=searchParams.get('q')
  const [Movies, setMovies] = useState([])
  useEffect(() => {
    getMoviesByText(q)
    .then((res)=>{
      setMovies(res.data)
    })
    .catch((err)=>{
      console.log(err)
      console.log("error")
      setMovies([])
    })
  }, [q])
 
  return (
    <div style={{marginTop:"5%"}}>
      <div className="card-columns" style={{ display: "inline-block" }}>
        {Movies!== undefined?Movies.map((movie: any) => {
          return (
            <Link to={'/movies/'+movie.imdbID}>
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "1rem",
                height: "10rem",
                maxHeight: "10rem",
                display: "inline-block",
              }}
            >
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
                  <small className="text-muted">
                    released: {movie.Year}
                  </small>
                </p>
              </div>
            </div>
            </Link>
          );
        }):<Alert severity="error" style={{marginLeft:"20%"}}>No movies found</Alert>}
      </div>
    </div>
  );
}
