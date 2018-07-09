// @flow
import React, { Component } from 'react';
import axios from 'axios';

import type Article from '../../constants/flowtypes';
import ArticleCard from './ArticleCard';

const categories = ['React', 'CSS', 'JavaScript'];

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
					const articles = this.state.articles.filter(articles => {
						return articles.category.includes(category.toLowerCase());
					});

					return (
						<div key={category}>
							<h2>{category}</h2>
							{articles.map(article => {
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
