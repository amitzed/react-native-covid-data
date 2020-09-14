import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchPage from './src/views/SearchPage';

const navigator = createStackNavigator({
  Search: SearchPage
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Covid19 Worldwide Data'
  }
});

export default createAppContainer(navigator);


// Hex Colors Theme (delete later):
// #41436A
// #984063
// #F64668
// #FE9677
