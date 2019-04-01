const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Create Schema
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	register_date: {
		type: Date,
		default: Date.now
	}
});

const Item = mongoose.model('user', UserSchema);

module.exports = Item;
