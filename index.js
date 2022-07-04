const path = require("path");
const express = require("express");
var cors = require("cors");
const app = express();
const rest = require("./rest");
const port = 3000 || process.env.PORT;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "100mb" }));

rest.initilizeRest(app);

app.listen(port, () => {
  console.log(`server connected to ${port}`);
});
