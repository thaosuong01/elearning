const express = require("express");
const connectDB = require("./config/connectDb");

var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();
const authRouter = require("./routes/auth.route");
const groupRouter = require("./routes/group.route");
const categoryRouter = require("./routes/category.route");
const courseRouter = require("./routes/course.route");
const topicRouter = require("./routes/topic.route");

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
app.use("/api/category", categoryRouter);
app.use("/api/course", courseRouter);
app.use("/api/topic", topicRouter);

app.use((req, res, next) => {
  return next(new APIError(404, "Not found!"));
});

app.use((error, req, res, next) => {
  const message = error.message || "Error Server!";
  const status = error.status || 500;

  res.status(status).json({
    message,
  });
});

app.listen(port, function () {
  console.log(`Khoi tao server ${process.env.PORT}`);
});
