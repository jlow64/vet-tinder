const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/", (req,res) => {
    res.send("Hello world");
});



// listen om port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is now running on port: ${port}`);
});