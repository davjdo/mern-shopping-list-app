const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Config
mongoose.Promise = global.Promise;
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => console.log('Mongo DB Connected ...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
