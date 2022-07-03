const path = require("path");
const express = require("express");

const app = express();
const rest = require("./rest");
const port = 3000 || process.env.PORT;

app.use(express.json());

rest.initilizeRest(app);

app.listen(port, () => {
  console.log(`server connected to ${port}`);
});
