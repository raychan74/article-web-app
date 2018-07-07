const mongoose = require('mongoose');

const Article = require('./Article');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	bookmark: [{
		type: ObjectId,
		ref: 'Article'
	}],
	authorOf: [{
		type: ObjectId,
		ref: 'Article'
	}],
	following: [{
		type: ObjectId,
		ref: 'User'
	}],
	followedBy: [{
		type: ObjectId,
		ref: 'User'
	}]
});

module.exports = mongoose.model('User', userSchema);
