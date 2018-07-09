// @flow
import React from 'react';

type Props = {
	articles: Array<{
		category: Array<string>,
		comments: Array<mixed>,
		content: string,
		lastEdited: number,
		likes: Array<string>,
		title: string,
		writtenBy: string,
		_id: string
	}>
};

// articles
const CategoryCard = (props: Props) => {
	return (
		<div>
			
		</div>
	);
};

export default CategoryCard;
