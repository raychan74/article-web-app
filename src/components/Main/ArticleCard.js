// @flow
import React from 'react';

import type Article from '../../constants/flowtypes';

const ArticleCard = (props: Article) => {
	const { title, writtenBy, likes } = props.article;

	return (
		<div>
			<img src='#' width='200' height='200' />
			<h3>{title}</h3>
			<p>{writtenBy}</p>

			<span>{likes.length}</span>

			{/* TODO: show bookmark when user is authenticated */}
			<span>Bookmark</span>
		</div>
	);
};

export default ArticleCard;
