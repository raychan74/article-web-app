// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { Article } from '../../constants/flowTypes';
import ArticleCard from './ArticleCard';
import { StyledLink } from './Styles';
import { fetchArticles } from '../../actions';

type Props = {
	history: *,
	fetchArticles: () => Array<Article>,
	articles: Array<Article>
};

const categories = ['React', 'JavaScript', 'CSS', 'CI/CD', 'Docker', 'Jenkins'];

// TODO: split request into smaller chunks, no need to grab the whole DB
class Main extends Component<Props, { articles: Array<Article> }> {
	componentDidMount() {
		this.props.fetchArticles();
	}

	render() {
		return (
			<div>
				{categories.map(category => {
					const articles = this.props.articles.filter(article => {
						// lowercase the category
						const lowerCased = article.category.map(string => string.toLowerCase());

						return lowerCased.includes(category.toLowerCase());
					});

					return (
						<div key={category}>
							<h2 style={{ boxShadow: '0 2px 1px -1px #eee', marginBottom: 0, width: '50%', borderBottom: '1px solid #ddd' }}>{category}</h2>
							{articles.slice(0, 3).map(article => {
								return (
									<StyledLink key={article._id} to={`article/${article._id}`}>
										<ArticleCard article={article} />
									</StyledLink>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps ({ articles }) {
	return { articles: articles.fetchedArticles };
}

export default connect(mapStateToProps, { fetchArticles })(Main);
