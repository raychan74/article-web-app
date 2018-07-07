const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const User = require('./models/User');
const Article = require('./models/Article');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/article-dev')
	.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({ a: 'abc' });
});

app.post('/api/user', (req, res) => {
	User.create(req.body)
		.then(user => res.json(user))
		.catch(err => res.send(err));
});

app.listen(PORT, () => {
	console.log('server started');
});
