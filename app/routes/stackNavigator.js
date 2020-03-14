import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../pages/SplashScreen';
import OnboardingScreen from '../pages/Onboarding';
import AuthScreen from '../pages/Auth';
import ResultScreen from '../pages/ResultScreen';
import ResultUjain from '../pages/ResultUjian';
import DetailMateri from '../pages/DetailMateri';
import DetailMateri_2 from '../pages/DetailMateri_2';
import DetailMateri_3 from '../pages/DetailMateri_3';
import TentangScreen from '../pages/Tentang';
import TabNavigator from './tabNavigator';
import Quiz from '../pages/Quiz';
import Ujian from '../pages/Ujian';

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
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailScreen: {
    screen: DetailMateri,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailScreen_2: {
    screen: DetailMateri_2,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailScreen_3: {
    screen: DetailMateri_3,
    navigationOptions: {
      headerShown: false,
    },
  },
  QuizScreen: {
    screen: Quiz,
    navigationOptions: {
      headerShown: false,
    },
  },
  UjianScreen: {
    screen: Ujian,
    navigationOptions: {
      headerShown: false,
    },
  },
  ResultScreen: {
    screen: ResultScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ResultUjianScreen: {
    screen: ResultUjain,
    navigationOptions: {
      headerShown: false,
    },
  },
  TentangScreen: {
    screen: TentangScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
