const express = require("express");
const connectDB = require("./config/connectDb");

var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();
const authRouter = require("./routes/auth.route");
const groupRouter = require("./routes/group.route");

var cors = require("cors");
const APIError = require("./middlewares/api-error");
app.use(cors());
require("dotenv").config();
let port = process.env.PORT || 4000;
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
connectDB();

app.use("/api/auth", authRouter);
app.use("/api/group", groupRouter);

app.use((req, res, next) => {
  return next(new APIError(404, "Not found!"));
});

app.use((error, req, res, next) => {
  const message = error.message || "Error Server!";
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message,
  });
});

app.listen(port, function () {
  console.log(`Khoi tao server ${process.env.PORT}`);
});
