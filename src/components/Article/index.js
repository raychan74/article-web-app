// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchArticle, freeArticle } from '../../actions';
import CommentCard from './CommentCard';
import type { Article as ArticleType } from '../../constants/flowTypes';
import { StyledArticle } from './Styles';
import placeholderImage from '../../../public/image/placeholder-400x400.png';

const { 
	AuthorInfoContainer,
	Avatar,
	Author,
	WrittenAt,
	FollowButton,
	Title,
	Text,
	IconContainer,
	Likes,
	LikeButton,
	BookmarkButton,
	CommentContainer,
	ShowCommentButton
} = StyledArticle;

type Props = {
	fetchArticle: (id: string) => ArticleType,
	freeArticle: () => void,
	match: *,
	article: ArticleType
};

// id = this.props.match.params.id
class Article extends Component<Props, { showComments: boolean }> {
	state = {
		showComments: false
	}

	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.freeArticle();
	}

	onShowCommentClick = () => {
		this.setState({ showComments: true });
	}

	render() {
		const { writtenBy, lastEdited, imageUrl, title, content, likes, comments } = this.props.article;
		const formattedTime = moment(lastEdited).format('Do MMM, YYYY');

		if (Object.keys(this.props.article).length === 0) {
			return <div>Loading...</div>;
		}

		return (
			<StyledArticle>
				<AuthorInfoContainer>
					<Avatar src={imageUrl} alt={'Author\'s Avatar'} width='128px' height='128px' />
					<Author>{writtenBy}</Author>
					<WrittenAt>
						Written at:<br />
						{formattedTime}
					</WrittenAt>
					<FollowButton>Follow</FollowButton>
				</AuthorInfoContainer>

				<img src={placeholderImage} alt='image of the article' width='100%' height='200px' />

				<Title>{title}</Title>
				<Text>{content}</Text>

				<IconContainer>
					<Likes>{likes.length}</Likes>
					<LikeButton>Like</LikeButton>

					<BookmarkButton>Bookmark</BookmarkButton>
				</IconContainer>

				<CommentContainer>
					<Text>Comments:</Text>
					{this.state.showComments
						? comments.map(comment => <CommentCard key={comment._id} comment={comment} />)
						: <ShowCommentButton onClick={this.onShowCommentClick}>Show Comments</ShowCommentButton>}
				</CommentContainer>
			</StyledArticle>
		);
	}
}

function mapStateToProps ({ articles }) {
	return { article: articles.fetchedArticle };
}

export default connect(mapStateToProps, { fetchArticle, freeArticle })(Article);
