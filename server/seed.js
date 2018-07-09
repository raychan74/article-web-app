// @flow
const mongoose = require('mongoose');
const faker = require('faker');

type ObjectId = typeof mongoose.Types.ObjectId;
type Comment = {
	author: ObjectId,
	content: string
};

const { lorem, name, internet, image } = faker;
const userId: Array<ObjectId> = [];
const articleId: Array<ObjectId> = [];
const categories: Array<string> = ['React', 'JavaScript', 'CSS', 'CI/CD', 'Docker', 'Jenkins'];

const randomPicker = (arr: Array<ObjectId>, probability: number, atLeast: number = 0): Array<ObjectId> => {
	atLeast > arr.length ? atLeast = arr.length : null;

	const ensuredItem = arr.slice(0, atLeast);
	const pickedItem = arr.slice(atLeast).filter(() => Math.random() < probability);

	return ensuredItem.concat(pickedItem);
};

for (let i = 0; i < 30; i++) {
	userId.push(mongoose.Types.ObjectId());
}

for (let i = 0; i < 100; i++) {
	articleId.push(mongoose.Types.ObjectId());
}

let users = userId.map(id => {
	return {
		_id: id,
		username: `${name.firstName()} ${name.lastName()}`,
		password: internet.password(),
		bookmark: randomPicker(articleId, 0.2),
		following: randomPicker(userId, 0.1),
		followedBy: [],
		authorOf: []
	};
});

const articles = articleId.map(id => {
	return {
		_id: id,
		writtenBy: users[Math.floor(Math.random() * users.length)].username,
		title: lorem.words(),
		content: lorem.paragraphs(),
		category: [categories[Math.floor(Math.random() * categories.length)]],
		imageUrl: image.avatar(),
		likes: randomPicker(userId, 0.4),
		comments: (randomPicker(userId, 0.1).map(id => {
			return {
				author: id,
				content: lorem.paragraph()
			};
		}): Array<Comment>),
	};
});

users = users.map(user => {
	user.authorOf = articles.reduce((acc, article) => {
		if (article.writtenBy === user.username) {
			acc.push(article._id);
		}

		return acc;
	}, []);

	user.followedBy = users.reduce((acc, user_reduce) => {
		if (user_reduce.following.some(id => id.equals(user._id))) {
			acc.push(user_reduce._id);
		}

		return acc;
	}, []);

	return user;
});

module.exports = ({ users, articles }: { users: Array<*>, articles: Array<*> });
