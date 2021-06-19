import express from "express";
import cors from "cors";
import connectionToDB from "./models/connection";
import env from "dotenv";
import userRouter from "./routes/users-route";
import movieRouter from "./routes/movie-route";
env.config();

const startServer = () => {
  const app = express();
  const path = __dirname + "/views";
  app.use(express.static(path));
  app.use(express.json());
  app.use(cors());
  app.use("/api/users", userRouter);
  app.use("/api/movies", movieRouter);
  app.get('/*', function (req,res) {
    res.sendFile(path + "/index.html");
  });
  connectionToDB()
    .then(() => {
      console.log("Connected to database");

      app.on("error", (err: any) => {
        console.log(`Error Connecting to http://localhost:${process.env.PORT}`);
        console.log(err.message);
      });

      app.listen(process.env.PORT, () => {
        console.log(`Server Running at http://localhost:${process.env.PORT}`);
      });
    })
    .catch((err: any) => {
      console.log(err.message);
    });
};

startServer();
