const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const projectRoute = require("./routes/project");
const todoRoute = require("./routes/todo");

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/project", projectRoute);
app.use("/v1/todo", todoRoute);

app.listen(3000, () => {
  console.log("Sever is running ...");
});
