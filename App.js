import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './src/views/HomePage';
import DataShowPage from './src/views/DataShowPage';

const navigator = createStackNavigator({
  Home: HomePage,
  DataShow: DataShowPage
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Covid-19 Worldwide Data'
  }
});

export default createAppContainer(navigator);
