import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES} from '../../configs';
import styles from './styles';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../configs/storageKey';

const SplashScreen = props => {
  useEffect(() => {
    const getPerformingTask = async () => {
      const key = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
      const isOnboarding = await storage.get(
        STORAGE_KEY.HAS_VISITED_ONBOARDING,
      );
      const data = await performingTask();
      if (data != null) {
        if (key.length) {
          props.navigation.navigate('AppScreen');
        } else if (isOnboarding) {
          props.navigation.navigate('AuthScreen');
        } else {
          props.navigation.navigate('OnboardingScreen');
        }
      }
    };
    getPerformingTask();
  }, [props.navigation]);
  const performingTask = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('result');
      }, 2000);
    });
  };
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO} />
      <View style={styles.support}>
        <Text style={styles.textSupport}>Support by :</Text>
        <Image source={IMAGES.TS} />
      </View>
    </View>
  );
};

export default SplashScreen;
