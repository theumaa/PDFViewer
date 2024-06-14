const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

mongoose
  .connect("mongodb+srv://admin:WzqRk98cU8aHRxDk@cluster0.5jcrqps.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .then(() => {
    app.listen(5001);
  })
  .catch((err) => {
    console.log(err);
  });

//pass = WzqRk98cU8aHRxDk
