import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { StyledSearchbar, StyledInput, StyledNav } from './Styles';

const renderField = (field) => (
	<span>
		<StyledInput {...field.input} type='text' />
		{field.meta.touched && field.meta.error &&
		<span>{field.meta.error}</span>}
	</span>
);

class Searchbar extends Component {
	render() {
		const { Icon } = StyledNav;

		return (
			<StyledSearchbar>
				<p>Hi</p>
				{
					false &&
						<Field
							name='search'
							type='text'
							component={renderField}
						/>
				}
			</StyledSearchbar>
		);
	}
}

export default reduxForm({ form: 'searchbar' })(Searchbar);
