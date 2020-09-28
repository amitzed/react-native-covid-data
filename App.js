import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchPage from './src/views/SearchPage';
import DataShowPage from './src/views/DataShowPage';

const navigator = createStackNavigator({
  Search: SearchPage,
  DataShow: DataShowPage
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Covid-19 Worldwide Data'
  }
});

export default createAppContainer(navigator);


// Hex Colors Theme (delete later):
// #41436A
// #984063
// #F64668
// #FE9677
