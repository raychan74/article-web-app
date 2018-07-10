import React from 'react';

import Nav from './Nav';

const App = ({ children }) => {
	return (
		<div>
			<Nav />
			{children}
		</div>
	);
};

export default App;
