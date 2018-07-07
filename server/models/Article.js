const mongoose = require('mongoose');

const User = require('./User');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const articleSchema = new Schema({
	writtenBy: {
		type: ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	likes: {
		type: ObjectId,
		ref: 'User'
	},
	lastEdited: {
		type: Number,
		default: new Date().getTime()
	},
	image: String,
	comments: [{
		author: { type: ObjectId, ref: 'User' },
		content: String
	}],
	category: [String]
});

module.exports = mongoose.model('Article', articleSchema);
