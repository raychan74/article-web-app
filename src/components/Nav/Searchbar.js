// @flow
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { StyledSearchbar, StyledInput, Arrow, InputContainer, SmallSearchIcon } from './Styles';
import search from '../../../public/image/round-search-24px.svg';

const renderField = (field): mixed => (
	<InputContainer>
		<StyledInput {...field.input} placeholder={field.placeholder} type='text' />
		{field.meta.touched && field.meta.error &&
		<span>{field.meta.error}</span>}
	</InputContainer>
);

class Searchbar extends Component<{}> {
	onSearchClick = () => {
		console.log(this.props);
	}

	onKeyPress = event => {
		event.key === 'Enter' ? console.log('hi') : null;
	}

	render() {
		return (
			<StyledSearchbar onKeyPress={this.onKeyPress}>
				<Field
					name='search'
					type='text'
					placeholder='Search...'
					component={renderField}
				/>
				<Arrow />
				<SmallSearchIcon
					src={search}
					onClick={this.onSearchClick}
				/>
			</StyledSearchbar>
		);
	}
}

export default reduxForm({ form: 'searchbar' })(Searchbar);
