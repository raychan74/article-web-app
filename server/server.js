const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');

const User = require('./models/User');
const Article = require('./models/Article');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.DEBUG) {
	mongoose.set('debug', true);
}

mongoose.connect('mongodb://localhost/article-dev')
	.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.json({ a: 'abc' });
});

app.post('/api/user', (req, res) => {
	User.create(req.body)
		.then(user => res.json(user))
		.catch(err => {
			if (err.code === 11000) {
				// error of duplicate key
				res.send('Username has been used');
			}
		});
});

// update bookmark, expect req.body contains articleId, userId
// in UI, try to delay DB query, wait for a few seconds before querying(if querying is async)
// route for toggling bookmark
app.put('/api/user', (req, res) => {
	User.findById(req.body.userId)
		.then(user => {
			if (user.bookmark.some(item => item.equals(req.body.articleId))) {
				user.bookmark = user.bookmark.filter(item => !item.equals(req.body.articleId));
			} else {
				user.bookmark.push(req.body.articleId);
			}

			user.save()
				.then(user => res.json(user))
				.catch(err => console.log(err));
		})
		.catch(err => res.status(500).send('Oops, something\'s not right'));
});

// route for following/follower
app.put('/api/user/follow', (req, res) => {
	User.findById(req.body.userId)
		.then(user => {
			let { following } = user;

			if (following.some(userToFollow => userToFollow.equals(req.body.toFollowId))) {
				following = following.filter(userToFollow => !userToFollow.equals(req.body.toFollowId));
			} else {
				following.push(req.body.toFollowId);
			}

			User.findById(req.body.toFollowId)
				.then(userToFollow => {
					let { followedBy } = userToFollow;

					if (followedBy.some(follower => follower.equals(req.body.userId))) {
						followedBy = followedBy.filter(follower => !follower.equals(req.body.userId));
					} else {
						followedBy.push(req.body.userId);
					}
					userToFollow.followedBy = followedBy;
					user.following = following;

					Promise.all([user.save(), userToFollow.save()])
						.then(resolve => res.send(''))
						.catch(err => res.status(500).send('Oops, something\'s not right here'));
				})
				.catch(err => res.status(500).send('Oops, something\'s not right here'));
		})
		.catch(err => res.status(500).send('Oops, something\'s not right here'));
});

// userId, articleId
app.put('/api/article/like', (req, res) => {
	Article.findById(req.body.articleId)
		.then(article => {
			console.log(article)
			article.likes.some(userId => userId.equals(req.body.userId))
				? article.likes = article.likes.filter(userId => !userId.equals(req.body.userId))
				: article.likes.push(req.body.userId);
			article.save()
				.then(resolve => res.send(''))
				.catch(err => res.status(500).send('Oops, something\'s not right here'));
		})
		.catch(err => res.status(500).send('Oops, something\'s not right here'));
});

app.get('/api/article', (req, res) => {
	Article.find({})
		.then(articles => res.json(articles))
		.catch(err => res.send('Cannot get articles'));
});

// send with userId
app.post('/api/article', (req, res) => {
	const newArticle = new Article(req.body);

	User.findById(req.body.userId)
		.then(user => {
			if (!user) {
				throw new Error('User not found');
			}

			user.authorOf.push(newArticle._id);
			Promise.all([user.save(), newArticle.save()])
				.then(resolution => res.send(resolution[1]))
				.catch(err => {
					console.log(err.message);

					return res.status(500).send('Unable to save to the database')
				});
		})
		.catch(err => {
			console.log(err.message);

			res.status(404).send('User not found');
		});
});

app.listen(PORT, () => {
	console.log('server started');
});
