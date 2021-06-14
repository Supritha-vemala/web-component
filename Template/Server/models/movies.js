"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var movieSchema = new mongoose_1.default.Schema({
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
var movieModel = mongoose_1.default.model("movies", movieSchema);
exports.default = movieModel;
