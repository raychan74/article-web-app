import styled from 'styled-components';

export const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: 2.5em 2fr 2.5em;
	text-align: center;
	align-items: center;
`;

StyledNav.Icon = styled.img`
	height: 2.5em;
	/* ensure the icon can be clicked even if something like a search bar shows up */
	z-index: 1;
`;

StyledNav.Heading = styled.h1`
	margin: 0;
`;

export const StyledSearchbar = styled.div`
	background: #ddd;
  border-radius: 4px;
	grid-column: 1 / 4;
`;

export const Arrow = styled.span`
	border: 12px solid black;
	border-color: transparent transparent #eee transparent;
  position: absolute;
  top: 30px;
  right: 19px;
`;

export const InputContainer = styled.div`
	margin: 2px 2px;
	height: 2.3em;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const StyledInput = styled.input`
	background: #eee;
	border: none;
	border-radius: 4px;
	width: 100%;
	box-sizing: border-box;
	height: 100%;
	outline: none;
	padding-left: 1em;
	font-size: 1em;
`;

export const SmallSearchIcon = styled.img`
	position: absolute;
	right: 18px;
	top: 55px;
	height: 30px;
`;
