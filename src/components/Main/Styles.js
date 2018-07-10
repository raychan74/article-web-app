import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

export const StyledArticleCard = styled.div`
	display: grid;
	grid-template-columns: 125px 1fr 1fr;
	grid-template-rows: auto 1fr 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	padding: 20px 0;
`;

StyledArticleCard.Image = styled.img`
	grid-area: 1 / 1 / 4 / 2;
`;

StyledArticleCard.Title = styled.h3`
	grid-column: 2 / 4;
	margin: 0;
	font-size: 1.2em;
`;

StyledArticleCard.Author = styled.p`
	grid-column: 2 / 4;
	margin: 0;
`;

StyledArticleCard.Likes = styled.span`
	
`;

StyledArticleCard.Bookmark = styled.span`
	
`;
