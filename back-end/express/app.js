const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();


const cors = require("cors");

app.use(cors());

app.use(express.json());


app.use(cookieParser());

app.use(bodyParser.json());

const authRouter = require("./routes/auth");


app.use("/api/v1", authRouter);

app.listen(3001, () => {
    console.log(`server listening on : 3001`);
})