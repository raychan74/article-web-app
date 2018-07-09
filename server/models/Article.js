const mongoose = require('mongoose');

const User = require('./User');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const articleSchema = new Schema({
	writtenBy: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	likes: [{
		type: ObjectId,
		ref: 'User'
	}],
	lastEdited: {
		type: Number,
		default: new Date().getTime()
	},
	comments: [{
		author: { type: ObjectId, ref: 'User' },
		content: String,
		lastEdited: { type: Number, default: new Date().getItem() }
	}],
	category: [String],
	imageUrl: {
		type: String
	}
});

module.exports = mongoose.model('Article', articleSchema);
