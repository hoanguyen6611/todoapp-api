const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const port = process.env.PORT||8000;
const projectRoute = require("./routes/project");
const todoRoute = require("./routes/todo");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");


dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));

//ROUTES
app.use("/v1/project", projectRoute);
app.use("/v1/todo", todoRoute);
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(port, () => {
  console.log("Sever is running ...");
});
