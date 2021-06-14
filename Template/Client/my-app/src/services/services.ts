import axios from "axios";
import { LOGGED_IN, TOP_MOVIES } from "../store/constants";
const loginUser = async (data: any) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/api/users/login",
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response);
    return ({ type: LOGGED_IN, payload: response.data });
    
  } catch (err) {
    return err;
  }
};

const signupUser = async (data: any) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/api/users/register",
      data
    );
    return response;
  } catch (err) {
    return err;
  }
};

const getTopRatedMovies = async (dispatch: any) => {
  try {
    let response = await axios.get(
      "http://localhost:5000/api/movies/getmovies/toRating"
    );
    dispatch({ type: TOP_MOVIES, payload: response.data });
    return response;
  } catch (err) {
    return err;
  }
};

const getMovieById = async (searchText: any) => {
  try {
    let response: any;
    response = await axios.get(
      `http://localhost:5000/api/movies/byid/${searchText}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

const getMoviesByText = async (searchText: any) => {
  try {
    let response: any;

    response = await axios.get(
      `http://localhost:5000/api/movies/serach/containing/${searchText}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

const getBookmarkedMovies = async (state: any) => {
  try {
    const bookmarkedMovies = await axios.get(
      `http://localhost:5000/api/movies/bookarkedby/${state.activeUser.user._id}`,
      {
        headers: { Authorization: state.activeUser.token },
      }
    );
    console.log(bookmarkedMovies);
    return bookmarkedMovies;
  } catch (err) {
    return err;
  }
};

const bookmarkMovie = async (imdbid: any, state: any) => {
  try {
    const result = await axios.patch(
      `http://localhost:5000/api/users/addBookmark/${imdbid}`,{},
      {
        headers: { Authorization: state.activeUser.token },
      }
    );
    console.log(result)
    return result;
  } catch (err) {
    return err;
  }
};
export {
  loginUser,
  signupUser,
  getTopRatedMovies,
  getMovieById,
  getMoviesByText,
  getBookmarkedMovies,
  bookmarkMovie,
};
