// const express = require("express");
// const app = express();
// const router = express.Router();

// const path = __dirname + "/";
// const port = 3001;

// router.use(function (req, res, next) {
//   console.log("/" + req.method);
//   next();
// });

// router.get("/", function (req, res) {
//   res.sendFile(path + "src/index.html");
// });

// app.use(express.static(path));
// app.use("/", router);

// app.listen(port, function () {
//   console.log("listening on port" + port + "...");
// });

// const path = require("path");
const express = require("express");
const app = express();
const port = 3003;

app.use(express.static(__dirname + "/src"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "index.html"));
});

app.listen(port, function () {
  console.log("listening on port" + port + "...");
});
