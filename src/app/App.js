import React from 'react';

// Locals
import Router from '~/app/Router';
import Provider from './Provider';
export const App = () => (
	<Provider>
		<Router />
	</Provider>
);
