const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/keys').get(process.env.NODE_ENV);
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;

// Connect to Mongo
mongoose
  .connect(
    config.DATABASE,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => console.log('Mongo DB Connected ...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));
  // Express will serve up the index.html file if doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
