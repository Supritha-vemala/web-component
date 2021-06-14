import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { bookmarkMovie, getMovieById } from "../services/services";
import { ADD_BOOKMARK } from "../store/constants";

interface Props {}

export const IDPage = (props: Props) => {
  const { imdbid } = useParams<any>();
  const userState = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [Movie, setMovie] = useState<any>(null);
  const [status, setStatus] = useState({ code: 0, message: "" });
  useEffect(() => {
    getMovieById(imdbid).then((res) => {
      setMovie(res.data);
    });
  }, [imdbid]);
  const handleAddBookMark = (imdbid: any) => {
    if (userState.activeUser) {
      bookmarkMovie(imdbid, userState)
        .then((res: any) => {
          console.log(res);
          if (res.status === 200)
            setStatus({ code: res.status, message: "Bookmarked already" });
          else {
            setStatus({ code: res.status, message: "Bookmarked movie" });
            dispatch({ type: ADD_BOOKMARK, payload: Movie.imdbID });
          }
        })
        .catch((err) => {
          console.log(err);
          setStatus({ code: err.status, message: err.response.message });
        });
    } else {
      setStatus({ code: 404, message: "Login to bookmark" });
    }
  };

  const checkIfBookMarked=() => {
    if (userState.activeUser.user && Movie) {
      for (let i of userState.activeUser.user.bookmarks) {
        if (i.toString() == Movie.imdbID) {
          return true
        }
      }
      return false
    }
    else
    return false
  };
  return (
    <div>
      {Movie === null ? (
        <></>
      ) : (
        <div style={{ marginTop: "3%" }}>
          <div className="conatiner">
            {status.code !== 0 ? (
              status.code !== 404 ? (
                <Alert style={{ width: "max-content", marginLeft: "40%" }}>
                  {status.message}
                </Alert>
              ) : (
                <Alert
                  severity="error"
                  style={{ width: "max-content", marginLeft: "40%" }}
                >
                  {status.message}
                </Alert>
              )
            ) : (
              <></>
            )}

            <div className="row">
              <div className="col-sm-6 post-div">
                <div className=" post-image-section">
                  <img className="image" alt="image" src={Movie.Poster}></img>
                </div>
              </div>
              <div className="col-sm-6 post-div">
                <h2 style={{ textAlign: "center" }}>{Movie.Title}</h2>
                <div className="movie-details d-flex justify-content-around">
                  <span className="span-component">
                    <h6>Rating:</h6> {Movie.imdbRating}
                  </span>
                  <span>
                    <h6>Released:</h6> {Movie.Released}
                  </span>
                  <span onClick={() => handleAddBookMark(Movie.imdbID)}>
                    {userState.activeUser != null ? (
                      checkIfBookMarked() ? (
                        <i
                          className="fa fa-bookmark fa-2x"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-bookmark-o fa-2x"
                          aria-hidden="true"
                        ></i>
                      )
                    ) : (
                      <></>
                    )}
                  </span>
                </div>
                <div>
                  <h4>Directors</h4>
                  <p> {Movie.Director}</p>
                </div>
                <div>
                  <h4>Actors</h4>
                  <p> {Movie.Actors}</p>
                </div>
                <div>
                  <h4>Genre</h4>
                  <p> {Movie.Genre}</p>
                </div>
                <div>
                  <h4>Language</h4>
                  <p> {Movie.Language}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
