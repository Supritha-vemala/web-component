"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBookMarkedMovies = exports.getMoviesForDisplay = exports.getMovieBySearchText = exports.getMovieById = void 0;
var movies_1 = __importDefault(require("../models/movies"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var getMovieById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imdbID, movie, result, movie_1, newMovie, response, err_1, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                imdbID = req.params.imdbid;
                return [4 /*yield*/, movies_1.default.findOne({ imdbID: imdbID })];
            case 1:
                movie = _a.sent();
                if (!movie) return [3 /*break*/, 2];
                res.status(200).send(movie);
                return [3 /*break*/, 7];
            case 2:
                _a.trys.push([2, 6, , 7]);
                return [4 /*yield*/, node_fetch_1.default("http://www.omdbapi.com/?i=" + imdbID + "&apikey=fdfbfbdc")];
            case 3:
                result = _a.sent();
                return [4 /*yield*/, result.json()];
            case 4:
                movie_1 = _a.sent();
                newMovie = new movies_1.default(movie_1);
                return [4 /*yield*/, movies_1.default.create(newMovie)];
            case 5:
                response = _a.sent();
                res.status(200).send(response);
                return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                res.send(404).send("IMDB id not found");
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 9];
            case 8:
                err_2 = _a.sent();
                res.status(404).send(err_2.message);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.getMovieById = getMovieById;
var getMovieBySearchText = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var text, result, movies, err_3, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                text = req.params.searchText;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, node_fetch_1.default("http://www.omdbapi.com/?s=" + text + "&apikey=fdfbfbdc")];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, result.json()];
            case 3:
                movies = _a.sent();
                movies.Search.forEach(function (movie) { return __awaiter(void 0, void 0, void 0, function () {
                    var foundMovie, result_1, data, newMovie;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, movies_1.default.findOne({ imdbID: movie.imdbID })];
                            case 1:
                                foundMovie = _a.sent();
                                if (!!foundMovie) return [3 /*break*/, 5];
                                return [4 /*yield*/, node_fetch_1.default("http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=fdfbfbdc")];
                            case 2:
                                result_1 = _a.sent();
                                return [4 /*yield*/, result_1.json()];
                            case 3:
                                data = _a.sent();
                                newMovie = new movies_1.default(data);
                                return [4 /*yield*/, movies_1.default.create(newMovie)];
                            case 4:
                                _a.sent();
                                _a.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                res.status(200).send(movies.Search);
                return [3 /*break*/, 5];
            case 4:
                err_3 = _a.sent();
                res.send(404).send("IMDB id not found");
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                err_4 = _a.sent();
                res.status(404).send("couldnot server request");
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getMovieBySearchText = getMovieBySearchText;
var getMoviesForDisplay = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log("ehee");
                return [4 /*yield*/, movies_1.default
                        .find({ imdbRating: { $ne: "N/A" } })
                        .sort({ imdbRating: -1 })
                        .limit(5)];
            case 1:
                result = _a.sent();
                res.status(200).send(result);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(404).send(err_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMoviesForDisplay = getMoviesForDisplay;
var getAllBookMarkedMovies = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bookmarkedMovies, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, movies_1.default.find({ imdbID: { $in: req.user.bookmarks } })];
            case 1:
                bookmarkedMovies = _a.sent();
                res.status(200).send(bookmarkedMovies);
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(404).send("could not respond");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllBookMarkedMovies = getAllBookMarkedMovies;
