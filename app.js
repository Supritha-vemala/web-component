"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var connection_1 = __importDefault(require("./models/connection"));
var dotenv_1 = __importDefault(require("dotenv"));
var users_route_1 = __importDefault(require("./routes/users-route"));
var movie_route_1 = __importDefault(require("./routes/movie-route"));
dotenv_1.default.config();
var startServer = function () {
    var app = express_1.default();
    var path = __dirname + "/views";
    app.use(express_1.default.static(path));
    app.use(express_1.default.json());
    app.use(cors_1.default());
    app.use("/api/users", users_route_1.default);
    app.use("/api/movies", movie_route_1.default);
    app.get('/*', function (req, res) {
        res.sendFile(path + "/index.html");
    });
    connection_1.default()
        .then(function () {
        console.log("Connected to database");
        app.on("error", function (err) {
            console.log("Error Connecting to http://localhost:" + process.env.PORT);
            console.log(err.message);
        });
        app.listen(process.env.PORT, function () {
            console.log("Server Running at http://localhost:" + process.env.PORT);
        });
    })
        .catch(function (err) {
        console.log(err.message);
    });
};
startServer();
