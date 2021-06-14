import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  imdbID: {
    type: String,
    required: true,
    unique: true,
  },
  Released: {
    type: String,
  },
  Genre: {
    type: String,
  },
  Director: {
    type: String,
  },
  Actors: {
    type: String,
  },
  Language: {
    type: String,
  },
  Poster: {
    type: String,
  },
  BoxOffice: {
    type: String,
  },
  imdbRating: {
    type: String,
  },
});

const movieModel = mongoose.model("movies", movieSchema);

export default movieModel ;
