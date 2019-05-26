import { createStackNavigator, createAppContainer } from 'react-navigation';

// Locals
import { Home } from '~/screens';

const AppNavigator = createStackNavigator(
	{
		HomeScreens: Home
	},
	{
		initialRouteName: 'HomeScreens',
		headerMode: 'hide'
	}
);

export default createAppContainer(AppNavigator);
