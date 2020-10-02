import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings122830Navigator from '../features/Settings122830/navigator';
import UserProfile122823Navigator from '../features/UserProfile122823/navigator';
import Settings122822Navigator from '../features/Settings122822/navigator';
import Settings122820Navigator from '../features/Settings122820/navigator';
import SignIn2122818Navigator from '../features/SignIn2122818/navigator';
import Settings122816Navigator from '../features/Settings122816/navigator';
import UserProfile122809Navigator from '../features/UserProfile122809/navigator';
import Settings122808Navigator from '../features/Settings122808/navigator';
import Settings122806Navigator from '../features/Settings122806/navigator';
import SignIn2122804Navigator from '../features/SignIn2122804/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings122830: { screen: Settings122830Navigator },
UserProfile122823: { screen: UserProfile122823Navigator },
Settings122822: { screen: Settings122822Navigator },
Settings122820: { screen: Settings122820Navigator },
SignIn2122818: { screen: SignIn2122818Navigator },
Settings122816: { screen: Settings122816Navigator },
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
