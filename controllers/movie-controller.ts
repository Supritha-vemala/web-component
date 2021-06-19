import movieModel from "../models/movies";
import fetch from "node-fetch";
const getMovieById = async (req: any, res: any) => {
  try {
    const imdbID = req.params.imdbid;
    const movie = await movieModel.findOne({ imdbID: imdbID });
    if (movie) {
      res.status(200).send(movie);
    } else {
      try {
        const result = await fetch(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=fdfbfbdc`
        );
        const movie = await result.json();
        let newMovie = new movieModel(movie);
        const response = await movieModel.create(newMovie);
        res.status(200).send(response);
      } catch (err) {
        res.send(404).send("IMDB id not found");
      }
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getMovieBySearchText = async (req: any, res: any) => {
  try {
    const text = req.params.searchText;
    try {
      const result = await fetch(
        `http://www.omdbapi.com/?s=${text}&apikey=fdfbfbdc`
      );
      const movies = await result.json();
      movies.Search.forEach(async (movie: any) => {
        const foundMovie = await movieModel.findOne({ imdbID: movie.imdbID });
        if (!foundMovie) {
          const result = await fetch(
            `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=fdfbfbdc`
          );
          const data = await result.json();
          let newMovie = new movieModel(data);
          await movieModel.create(newMovie);
        }
      });
      res.status(200).send(movies.Search);
    } catch (err) {
      res.send(404).send("IMDB id not found");
    }
  } catch (err) {
    res.status(404).send("couldnot server request");
  }
};

const getMoviesForDisplay = async (req: any, res: any) => {
  try {
    console.log("ehee");
    const result = await movieModel
      .find({ imdbRating: { $ne: "N/A" } })
      .sort({ imdbRating: -1 })
      .limit(5);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getAllBookMarkedMovies = async (req: any, res: any) => {
  try{
    const bookmarkedMovies=await movieModel.find({imdbID:{$in:req.user.bookmarks}})
    res.status(200).send(bookmarkedMovies)
  }catch(err){
    res.status(404).send("could not respond")
  }
};
export {
  getMovieById,
  getMovieBySearchText,
  getMoviesForDisplay,
  getAllBookMarkedMovies,
};
