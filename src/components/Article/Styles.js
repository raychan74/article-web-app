import styled from 'styled-components';

export const StyledCommentCard = styled.div`
	border: 1px solid #ddd;
	border-radius: 4px;
	margin: 1em;
	padding: 1em;
`;

StyledCommentCard.Author = styled.p`
	font-weight: bold;
	font-size: 1.2em;
	margin: 0;
`;

StyledCommentCard.Date = styled.span`
`;

StyledCommentCard.Content = styled.p`
	margin-bottom: 0;
`;

export const StyledArticle = styled.div`
	
`;

StyledArticle.AuthorInfoContainer = styled.div`
	margin: 2em 1em;
	display: grid;
	grid-template-columns: 128px auto;
	grid-template-rows: auto auto 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 10px;
`;

StyledArticle.Avatar = styled.img`
	border-radius: 50%;
	grid-row: 1 / 4;
`;

StyledArticle.Author = styled.h3`
	margin: 0;
`;

StyledArticle.WrittenAt = styled.p`
	grid-area: 2 / 2 / 3 / 3;
	margin: 0;
`;

StyledArticle.FollowButton = styled.button`
	border: 1px solid lightgreen;
	border-radius: 4px;
	background: none;
	height: 30px;
	outline: none;
	width: 100px;
	cursor: pointer;

	&:active {
		background: lightgreen;
	}
`;

StyledArticle.Title = styled.h2`
	
`;

StyledArticle.Text = styled.p`
	font-size: 1.2em;
	line-height: 1.5em;
`;

StyledArticle.IconContainer = styled.div`
	
`;

StyledArticle.Likes = styled.span`
	
`;

StyledArticle.LikeButton = styled.button`
	
`;

StyledArticle.BookmarkButton = styled.button`
	
`;

StyledArticle.CommentContainer = styled.div`
	
`;

StyledArticle.ShowCommentButton = styled.button`
	
`;
