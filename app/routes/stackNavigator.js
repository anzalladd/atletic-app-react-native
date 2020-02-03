import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../pages/SplashScreen';
import OnboardingScreen from '../pages/Onboarding';
import AuthScreen from '../pages/Auth';
import AppScreen from '../pages/App';

export const SplashScreenStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export const OnboardingStack = createStackNavigator({
  OnboardingScreen: {
    screen: OnboardingScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export const AuthStack = createStackNavigator({
  AuthScreen: {
    screen: AuthScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export const AppStack = createStackNavigator({
  AppScreen: {
    screen: AppScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
