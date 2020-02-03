import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {
  SplashScreenStack,
  OnboardingStack,
  AuthStack,
  AppStack,
} from './stackNavigator';

const MainNavigator = createSwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnboardingScreen: OnboardingStack,
    AuthScreen: AuthStack,
    AppScreen: AppStack,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const app = createAppContainer(MainNavigator);

export default app;
