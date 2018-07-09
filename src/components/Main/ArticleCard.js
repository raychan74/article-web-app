// @flow
import React from 'react';

import type Article from '../../constants/flowtypes';
import {
	StyledArticleCard
} from './Styles';

const ArticleCard = (props: Article) => {
	const { title, writtenBy, likes } = props.article;
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
};

export default ArticleCard;
