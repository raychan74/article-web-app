// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Searchbar from './Searchbar';
import { StyledNav } from './Styles';
import { toggleSearchBox, toggleMenu } from '../../actions';
import clear from '../../../public/image/round-clear-24px.svg';
import menu from '../../../public/image/round-menu-24px.svg';
import search from '../../../public/image/round-search-24px.svg';
import type { Nav as NavType } from '../../constants/flowTypes';

type Props = {
	toggleSearchBox: () => void,
	toggleMenu: () => void,
	nav: NavType
};

class Nav extends Component<Props> {
	onSearchBoxClick = () => {
		this.props.toggleSearchBox();
	}

	onMenuClick = () => {
		this.props.toggleMenu();
	}

	render() {
		const { Icon, Heading } = StyledNav;
		const { showSearchBox, showMenu } = this.props.nav;

		return (
			<StyledNav>
				<Icon
					src={showMenu ? clear : menu}
					onClick={this.onMenuClick}
				/>
				
				<Link to='/'>
					<Heading>LOGO</Heading>
				</Link>

				<Icon
					src={showSearchBox ? clear : search}
					onClick={this.onSearchBoxClick}
				/>
				{showSearchBox ? <Searchbar /> : null }
			</StyledNav>
		);
	}
}

function mapStateToProps({ nav }) {
	return { nav };
}

export default connect(mapStateToProps, { toggleSearchBox, toggleMenu })(Nav);
