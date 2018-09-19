const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;
