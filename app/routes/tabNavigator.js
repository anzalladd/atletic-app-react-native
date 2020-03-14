import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from '../pages/App';
import Profile from '../pages/Profile';
import ListQuiz from '../pages/ListQuiz';
import React from 'react';
import {View} from 'native-base';
import HomeIcon from '../assets/icon/Home';
import ProfileIcon from '../assets/icon/Profile';
import Fab from '../assets/icon/Fab';

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <HomeIcon color={tintColor} />
          </View>
        ),
      },
    },
    Quiz: {
      screen: ListQuiz,
      navigationOptions: {
        tabBarVisible: false,
        tabBarIcon: () => (
          <View style={{position: 'relative', bottom: 15}}>
            <Fab />
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <ProfileIcon color={tintColor} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#231D5A',
    inactiveColor: '#E5E5E5',
    barStyle: {
      backgroundColor: '#FFFFFF',
      borderTopColor: '#F0EEF8',
      borderTopWidth: 2,
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
    },
    labeled: false,
  },
);
