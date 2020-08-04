import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './modules/Apps';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);
