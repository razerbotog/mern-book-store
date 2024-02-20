import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routes/books.route.js";
import cors from  'cors';

const app = express();

// for parsing request body
app.use(express.json())

// option 1: allow all origins with default of cors(*)
app.use(cors())
//option 2: allow custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowHeaders: ['Content-Type']
// }))


app.get("/", (req, res) => {
    // console.log(req);
    return res.status(200).send("welcome")
});
app.use('/books', bookRouter)

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`App is listening ${PORT}`);
      });
  })
  .catch((error) => console.log(error));
