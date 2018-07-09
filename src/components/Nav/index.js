import React, { Component } from 'react';
import { connect } from 'react-redux';

import Searchbar from './Searchbar';
import { StyledNav } from './Styles';
import { toggleSearchBox, toggleMenu } from '../../actions';

class Nav extends Component {
	onSearchBoxClick = () => {
		this.props.toggleSearchBox();
	}

	onMenuClick = () => {
		this.props.toggleMenu();
	}

	render() {
		const { Icon, Heading } = StyledNav;

		return (
			<StyledNav>
				<Icon
					src='image/round-menu-24px.svg'
					onClick={this.onMenuClick}
				/>
				<Heading>LOGO</Heading>
				<Icon
					src='image/round-search-24px.svg'
					onClick={this.onSearchBoxClick}
				/>
				{this.props.nav.showSearchBox ? <Searchbar /> : null }
			</StyledNav>
		);
	}
}

function mapStateToProps({ nav }) {
	return { nav };
}

export default connect(mapStateToProps, { toggleSearchBox, toggleMenu })(Nav);
