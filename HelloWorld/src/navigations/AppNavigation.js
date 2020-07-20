import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../containers/pages/HomeScreen';
import RecipeScreen from '../containers/pages/RecipeScreen';
import DrawerContainer from '../containers/organisms/DrawerContainer';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Recipe: RecipeScreen,
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    defaulfNavigationOptions: ({navigation}) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
    }),
  },
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  },
);

const AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;
export default AppContainer;
