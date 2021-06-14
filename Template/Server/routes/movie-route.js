"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var movie_controller_1 = require("../controllers/movie-controller");
var users_controller_1 = require("../controllers/users-controller");
router.get("/byid/:imdbid", function (req, res) {
    movie_controller_1.getMovieById(req, res);
});
router.get("/serach/containing/:searchText", function (req, res) {
    movie_controller_1.getMovieBySearchText(req, res);
});
router.get("/getmovies/toRating", function (req, res) {
    movie_controller_1.getMoviesForDisplay(req, res);
});
router.get("/bookarkedby/:userid", users_controller_1.checkAuthoraiztion, function (req, res) {
    movie_controller_1.getAllBookMarkedMovies(req, res);
});
exports.default = router;
