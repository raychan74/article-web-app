// @flow
import React from 'react';
import moment from 'moment';

import type { ObjectId } from '../../constants/flowTypes';
import { StyledCommentCard } from './Styles';

type Props = {
	comment: {
		content: string,
		lastEdited: number,
		author: {
			_id: ObjectId,
			username: string
		}
	}
};

const CommentCard = (props: Props) => {
	const { Author, Date, Content } = StyledCommentCard;
	const { author, content, lastEdited } = props.comment;
	const formattedTime = moment(lastEdited).format('Mo MM, YYYY');

	return (
		<StyledCommentCard>
			<Author>{author.username}</Author>
			<Date>{formattedTime}</Date>

			<Content>{content}</Content>
		</StyledCommentCard>
	);
};

export default CommentCard;
