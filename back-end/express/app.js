require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(cookieParser());

app.use(bodyParser.json());

const userRouter = require("./router/api");

app.get("/show", (req, res) => {
  res.status(200).render("show");
});

app.use("/api/v1", userRouter);

// const connectToDb = require("./config/database");

app.listen(3001, () => {
    console.log(`server listening on : 3001`);
})