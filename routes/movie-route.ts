import express from "express";

const router = express.Router();
import {
  getMovieById,
  getMovieBySearchText,
  getMoviesForDisplay,
  getAllBookMarkedMovies
} from "../controllers/movie-controller";
import { checkAuthoraiztion } from "../controllers/users-controller";

router.get("/byid/:imdbid", (req, res) => {
  getMovieById(req, res);
});

router.get("/serach/containing/:searchText", (req, res) => {
  getMovieBySearchText(req, res);
});

router.get("/getmovies/toRating",(req,res)=>{
  getMoviesForDisplay(req,res)
})

router.get("/bookarkedby/:userid",checkAuthoraiztion,(req,res)=>{
  getAllBookMarkedMovies(req,res)
})
export default router;
