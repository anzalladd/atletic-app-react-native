import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES} from '../../configs';
import styles from './styles';

const SplashScreen = props => {
  useEffect(() => {
    const getPerformingTask = async () => {
      const data = await performingTask();
      if (data != null) {
        props.navigation.navigate('OnboardingScreen');
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
