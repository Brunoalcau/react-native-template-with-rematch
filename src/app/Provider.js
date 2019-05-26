import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// Locals
import store from './store';
import { theme } from '~/config';

export default ({ children }) => (
	<ReduxProvider store={store}>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</ReduxProvider>
);
