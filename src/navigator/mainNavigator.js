import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile122809Navigator from '../features/UserProfile122809/navigator';
import Settings122808Navigator from '../features/Settings122808/navigator';
import Settings122806Navigator from '../features/Settings122806/navigator';
import SignIn2122804Navigator from '../features/SignIn2122804/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile122809: { screen: UserProfile122809Navigator },
Settings122808: { screen: Settings122808Navigator },
Settings122806: { screen: Settings122806Navigator },
SignIn2122804: { screen: SignIn2122804Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
