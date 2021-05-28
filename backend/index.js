const express = require('express');
const cors = require('cors');
const profiles = require('./data/profiles.json');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

const distanceRouter = require("./routes/Distance");
app.use("/distance",distanceRouter)
app.get('/', (req, res) => {
  res.send(profiles[0].email);
});
/**
 * Login page.. send user if found else send null
 */

app.post('/', (req, res) => {
  let email = req.body.email;
  console.log(email);
  let user = null;
  // check if user in database
  profiles.forEach((person) => {
    if (email === person.email) {
      user = person;
    }
  });
  res.send(user);
});

// listen om port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is now running on port: ${port}`);
});
