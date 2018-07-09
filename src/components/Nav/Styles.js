import styled from 'styled-components';

export const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: 2.5em 2fr 2.5em;
	text-align: center;
	align-items: center;
`;

StyledNav.Icon = styled.img`
	height: 2.5em;
`;

StyledNav.Heading = styled.h1`
	margin: 0;
`;

export const StyledSearchbar = styled.div`
	
`;

export const StyledInput = styled.input`
	background: #eee;
	border: none;
	width: 50px;
`;
