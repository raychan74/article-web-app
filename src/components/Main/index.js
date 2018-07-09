// @flow
import React, { Component } from 'react';
import axios from 'axios';

import type Article from '../../constants/flowtypes';
import ArticleCard from './ArticleCard';

const categories = ['React', 'JavaScript', 'CSS', 'CI/CD', 'Docker', 'Jenkins'];

// TODO: split request into smaller chunks, no need to grab the whole DB
class Main extends Component<{}, { articles: Array<Article> }> {
	state = {
		articles: []
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/article')
			.then(res => this.setState({ articles: res.data }));
	}

	render() {
		return (
			<div>
				{categories.map(category => {
					const articles = this.state.articles.filter(article => {
						// lowercase the category
						const lowerCased = article.category.map(string => string.toLowerCase());

						return lowerCased.includes(category.toLowerCase());
					});

					return (
						<div key={category}>
							<h2 style={{ boxShadow: '0 2px 1px -1px #eee', marginBottom: 0, width: '50%', borderBottom: '1px solid #ddd' }}>{category}</h2>
							{articles.slice(0, 3).map(article => {
								return <ArticleCard key={article._id} article={article} />;
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Main;
