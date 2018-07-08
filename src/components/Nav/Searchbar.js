import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Searchbar extends Component {
	render() {
		return (
			<div>
				<span>Q</span>
				<Field
					name='search'
					type='text'
					component='input'
				/>
			</div>
		);
	}
}

export default reduxForm({ form: 'searchbar' })(Searchbar);
