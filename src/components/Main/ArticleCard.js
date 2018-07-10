// @flow
import React, { Component } from 'react';

import type { Article } from '../../constants/flowTypes';
import {
	StyledArticleCard
} from './Styles';

class ArticleCard extends Component<Article> {
	render() {
		const { title, writtenBy, likes } = this.props.article;
		const { Image, Title, Author, Likes, Bookmark } = StyledArticleCard;

		return (
			<StyledArticleCard>
				<Image src='#' width='125' height='125' />
				<Title>{title}</Title>
				<Author>{writtenBy}</Author>

				<Likes>{likes.length}</Likes>

				{/* TODO: show bookmark when user is authenticated */}
				<Bookmark>Bookmark</Bookmark>
			</StyledArticleCard>
		);
	}
}

export default ArticleCard;
