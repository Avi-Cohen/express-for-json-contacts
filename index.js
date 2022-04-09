const express = require("express");
const apiController = require("./controllers/apiController");
const basicAuth = require("./util/basic-auth");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5001;

// app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  basicAuth(req.headers.authorization);
  res.send("<h1>contacts-rest-api</h1>");
});

apiController(app);

app.listen(PORT);
