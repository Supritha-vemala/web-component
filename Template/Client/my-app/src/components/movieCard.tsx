import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    movie:any
}

export default function MovieCard({movie}: Props): ReactElement {
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
    )
}
